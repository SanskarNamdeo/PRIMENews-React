    let url = 'https://newsapi.org/v2/top-headlines?country=us&category=&apiKey=9b97115022cd470cb5918a2b05cfbd12'
    let data = await fetch(url)
    let parsedData = await data.json()
    console.log(parsedData)
    this.setState({ articles: parsedData.articles })