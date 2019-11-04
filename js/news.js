$.ajax({
    type: "GET",
    url: "https://newsapi.org/v2/everything?q=nasa&apiKey=a83f7e73223d46e8b188cbe85d7b07ac",
    success: function (response) {
        loadNews(response);
    }
});

function loadNews(data){
    let news = data.articles;
    let content = "";
    let length = news.length;
    $("#page").fadeIn(3000);
    for(i = 0; i < length; i++){
        content += `<div class="col s12 m4">
                        <a href="${news[i].url}">
                            <div class="title">
                                <h6 class="title-news">${news[i].title}<h6>
                            </div>
                            <div class="picture">
                                <img class="responsive-img" src="${news[i].urlToImage}" alt="">
                            </div>
                            <div class="description">
                                <p class="news-description">${news[i].description} 
                                    <p style="float: right;">Read more...<p/>
                                </p>
                            </div>
                        </a>
                    </div>
        `
    }
    $("#news").append(content);
}