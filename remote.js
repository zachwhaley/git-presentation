var git = new GitGraph({
  template: "metro",
  orientation: "horizontal",
  mode: "compact"
})

var origin = git.branch({
  name: 'remotes/origin/master',
  color: "red",
  commitDefaultOptions: {
    color: "red"
  }
})
origin.commit()

var master = git.branch({
  name: 'master',
  color: "#979797",
  commitDefaultOptions: {
    color: "#979797"
  }
})
master.commit()
origin.commit()
origin.commit()
