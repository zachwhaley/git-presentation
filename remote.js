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
git.commit()
