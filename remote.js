var git = new GitGraph({
  template: "metro",
  orientation: "horizontal",
  mode: "compact"
})

var server = git.branch({
  name: 'server',
  color: 'black',
  commitDefaultOptions: {
    color: 'black'
  }
})
var init = server.commit({dotSize: 5})

var remote = server.branch({
  name: 'origin/master',
  color: 'red',
  commitDefaultOptions: {
    color: 'red'
  }
})

remote.commit()
server.commit()

remote.commit()
server.commit()

remote.commit()
server.commit()

remote.commit()
server.commit()

var master = remote.branch({
  name: 'master',
  color: "#979797",
  commitDefaultOptions: {
    color: "#979797"
  }
})
master.commit()

server.commit()
remote.commit()

remote.merge(master)
