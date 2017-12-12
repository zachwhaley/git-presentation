var git = new GitGraph({
  template: "metro",
  orientation: "horizontal",
  mode: "compact"
})

var origin = git.branch({
  name: 'master',
  color: "black",
  commitDefaultOptions: {
    color: "black",
    labelColor: "white"
  }
})
git.commit()
