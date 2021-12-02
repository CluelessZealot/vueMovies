// using XMLHttpRequest object to send a "get" request
var movieTickets = [];


// old Code for api =>
//  var httpRequest = new XMLHttpRequest();
//  httpRequest.open("get", "https://api.themoviedb.org/3/movie/now_playing?api_key=8087d190320d397a65275f06876bcc36&language=en-US&page=1");
//  httpRequest.send();
 
//  httpRequest.onreadystatechange = afunction;
//  function afunction(){
//      // console.log(httpRequest.readyState);
//      if (httpRequest.readyState == 4 && httpRequest.status == 200 )
//      {
//          var movies = httpRequest.responseText;
//          bool = true;
//          var movieObj = JSON.parse(movies);
//          movieTickets = movieObj.results;
//          // console.log(movieTickets);
//          console.log('Http request HAS finished yet', movieTickets);
//      }
//  }



Vue.component('cardlayout', {
    template: `
       <div class="card" style="width: 18rem;">
       <img v-bind:src="'https://image.tmdb.org/t/p/w500' + movieobj.poster_path" class="card-img-top" alt="...">
       <div class="card-body">
       <h5 class="card-title">{{movieobj.title}}</h5>
       <p class="card-text">{{movieobj.overview}}</p>
       <a href="#" v-on:click = "adultTicket()" class="btn btn-primary" id = "adultt">Buy adult ticket</a>
       <hr>
       <a href="#" v-on:click = "childTicket()" class="btn btn-primary" id = "childt">Buy child ticket</a>
       </div>
       </div>
    `,
    props: ['movieobj'],
    methods : {
        adultTicket(){
            this.movieobj.adultTickets++
            alert(this.movieobj.adultTickets)
        },
        childTicket(){
            this.childTickes++
            alert(this.childTickets)
        },
        removeAdult(){
            this.adultTickets--
        },
        removeChild(){
            this.childTickets--
        }
    }
})

Vue.component('shoplayout', {
    template: `<tr>
    <th scope="row">{{movies.title}}</th>
    <td>{{movies.adult}}</td>
    <td>{{movies.child}}</td>
    <td>{{movies.adult}}{{movies.child}}</td>
  </tr>`,
  props: ['movies'],
  methods : {
    adultTicket(){
        this.adultTickets++
        alert("it worked")
    },
    childTicket(){
        this.childTickes++
        alert(this.childTickets)
    },
    removeAdult(){
        this.adultTickets--
    },
    removeChild(){
        this.childTickets--
    }
}
  
})

 
const app = new Vue({
         el: "#app",
         data: {
                ifTicket: false,
                ifRow: false,
            
                movieTickets: [],
         },
         methods : {
             adultTicket(){
                 this.adultTickets++
                 alert(adultTicket)
             },
             childTicket(){
                 this.childTickets++
                 alert(childTicket)
             },
             removeAdult(){
                 this.adultTickets--
             },
             removeChild(){
                 this.childTickets--
             }
         },

         // life hook to render array after page loads      
         mounted(){
            axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=8087d190320d397a65275f06876bcc36&language=en-US&page=1')
                .then((response) => {
                    movies = response.data.results;

                    tempArray = movies;

                    tempArray.splice(3,17);
                    tempArray.forEach(movieTickets => {
                        var newMovie =  {
                            title: movieTickets.title,
                            overview: movieTickets.overview,
                            poster_path: movieTickets.poster_path,
                            childTickets: 0,
                            adultTickets: 0
                        }
                        this.movieTickets.push(newMovie)
                    })
                    

                    console.log(this.movieTickets);
                })
         }
     })
