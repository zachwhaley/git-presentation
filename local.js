var git = new GitGraph({
  template: "metro",
  orientation: "horizontal",
  mode: "compact"
})

var origin = git.branch('master')
git.commit()
