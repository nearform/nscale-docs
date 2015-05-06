# nscale on startup

starting with v0.16 it is now possible to configure Ubuntu to run the nscale-kernel on startup.
- Create the file `/etc/init.d/nscale` and paste the script below. _You need sudo privileges_
- Run `sudo sed -i "s/YourUserHere/$(whoami)/" /etc/init.d/nscale && sudo chmod +x /etc/init.d/nscale && sudo update-rc.d nscale defaults` 

### Check That It's Working
- run `sudo service nscale restart`
- run `nscale status`

You should see that nscale is running.

```bash
#!/bin/sh
### BEGIN INIT INFO
# Provides:
# Required-Start:    $remote_fs $syslog
# Required-Stop:     $remote_fs $syslog
# Default-Start:     2 3 4 5
# Default-Stop:      0 1 6
# Short-Description: Start daemon at boot time
# Description:       Enable service provided by daemon.
### END INIT INFO

user="YourUserHere"
cmd="nscale-kernel -c /home/$user/.nscale/config/config.json"
name=`basename $0`
pid_file="/home/$user/.nscale/data/.nscale-kernel"
stdout_log="/home/$user/.nscale/log/kernel.log"

get_pid() {
    cat "$pid_file"
}

is_running() {
    [ -f "$pid_file" ] && ps `get_pid` > /dev/null 2>&1
}
case "$1" in
    start)
    if ! is_running; then
        echo "starting $name"
        sudo -u "$user" $cmd > $stdout_log 2>&1 &
    else
        echo "service is already running"
    fi
    ;;
    stop)
    if is_running; then
        echo "stopping $name"
        kill `get_pid`
    else
        echo "service is already stopped"
    fi
    ;;
    restart)
    $0 stop
    $0 start
    ;;
    status)
    if is_running; then
        echo "Running"
    else
        echo "Stopped"
        exit 1
    fi
    ;;
    *)
    echo "usage: $0 {start|stop|restart|status}"
    exit 1
    ;;
esac

exit 0
```
