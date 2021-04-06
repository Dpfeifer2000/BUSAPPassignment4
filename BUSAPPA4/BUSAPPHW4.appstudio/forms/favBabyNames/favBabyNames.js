
favNames.onshow=function(){
  drpFavorite.clear()
    console.log(chosen)
    for (i = 0; i < 5; i++)
        drpFavorite.addItem(chosen[0][i])
}

drpFavorite.onclick=function(s){
  if (typeof(s) == "object") {
        return
    } else {
        lblNames.value = `Your favorite girl baby name was ${s}.`
    }
}