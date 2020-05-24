<script context="module">
  export function preload({ params, query }) {
    let url = `index.json`
    return this.fetch(url).then(r => r.json()).then(blog => {
      return { blog };
    });
  }
</script>

<script>
  import CardList from '../components/CardList.svelte';
  export let blog;
</script>

<style>
  :global(main){
    padding-top: 0 !important;
  }
  section:not(.qualification) {
    background-color: white;
    color: #8b4513;
    display: flex;
    flex-wrap: wrap;
  }

  section {
    padding: 2em;
    margin-left: -2em;
    margin-right: -2em;
    padding-top: 3rem;
  }

  section > div {
    width: 100%;
  }

  .social-icons {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .social-icons svg {
    width: 2rem;
    height: 2rem;
    fill: white;
    border: 1px solid white;
    padding: 0.5rem;
    border-radius: 10px;
  }
  .social-icons svg:hover {
    width: 2rem;
    fill: #bf7e68;
    border-color: #bf7e68;
    background-color: white;
  }

  #intro {
   background-color: #4c241d;
   color: white;
   position: relative;
   padding-bottom: 0;
  }

  #intro::after {
    content: url("/svgs/wave.svg");
    width: 110%;
    position: relative;
    background-color: white;
    padding: 0;
    margin-left: -2em;
    margin-right: -2em;
  }

  #intro img {
    width: 100%;
    border-radius: 50%;
    max-width: 300px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .qualification {
    position: relative;
    margin-bottom: 5rem;
    background: white;
  }

  .qualification::before,
  .qualification::after {
    content: "";
    position: absolute;
    z-index: 2;
  }

  .qualification::before {
    height: 150px;
    width: 150px;
    overflow: hidden;
    top: -1rem;
    left: 1rem;
    background-size: 150px;
    background-image: url("/svgs/owl.svg");
  }


  .qualification::after {
    height: 100px;
    width: 100px;
    background-size: 100px;
    background-image: url("/svgs/egg.svg");
    top: auto;
    left: 50%;
    bottom: -50px;
  }

  .qualification .timeline {
    padding: 35px 0;
    position: relative;
    z-index: 1;
  }

  .qualification .timeline::before,
  .qualification .timeline::after {
    content: "";
    height: 100%;
    width: 50%;
    /*border-radius: 110px 0 0 110px;*/
    border: 1rem solid #4c241d;
    border-right: none;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
  }

  .qualification .timeline::after {
    height: calc(100% - 2rem);
    width: calc(50% - 1rem);
    border-color: #bf7e68;
    left: 1rem;
    top: 1rem;
    /*border-radius: 0 100px 100px 0;*/

  }

  .qualification .timeline::before {
    border-radius: 1rem;
  }

  .timeline:first-child::before,
  .timeline:first-child::after {
    margin-top: 1rem;
    border-top: 0 !important;
  }

  .timeline:first-child::before {
    height: calc(100% - 1rem);
    top: 1rem;
  }

  .qualification .timeline-content {
    display: flex;
    flex-direction: column;
    max-width: 80%;
  }

  .qualification .timeline:nth-child(odd) .timeline-content {
    margin-left: auto;
  }

  .qualification .timeline:nth-child(even) .timeline-content {
    margin-right: auto;
  }

  .qualification .timeline-content:hover {
    text-decoration: none;
  }

  .qualification .timeline-year {
    font-size: 2rem;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100%;
    left: 3rem;
    margin-top: 2rem;
  }

  .qualification .timeline-icon {
    width: 100%;
    height: 50px;
    text-align: center;
  }

  .qualification .content {
    color: #909090;
    width: 100%;
    padding: 20px;
    display: inline-block;
    float: right;
  }

  .qualification .title {
    color: #65c7d0;
    font-size: 20px;
    font-weight: 600;
    text-transform: uppercase;
    margin: 0 0 5px 0;
  }

  .qualification .description {
    font-size: 16px;
    margin: 0;
  }

  .qualification .timeline:nth-child(even)::before {
    left: auto;
    right: 0;
    /*border-radius: 0 110px 110px 0;*/
    border: 1rem solid #bf7e68;
    border-left: none;
  }

  .qualification .timeline:nth-child(even)::after {
    left: auto;
    right: 1rem;
    /*border-radius: 0 100px 100px 0;*/
    border: 1rem solid #4c241d;
    border-left: none;
  }

  .qualification .timeline:nth-child(even) .content {
    float: left;
  }

  .qualification .timeline:nth-child(even) .timeline-year {
    left: auto;
    right: 10%;
  }

  .qualification .timeline:nth-child(even) .timeline-icon {
    left: auto;
    right: 32%;
    fill: #bf7e68;
  }

  .qualification .timeline:nth-child(odd) .timeline-icon {
    fill: #4c241d;
  }

  .qualification .timeline:nth-child(odd) .timeline-year,
  .qualification .timeline:nth-child(odd) .title {
    color: #4c241d;
  }

  .qualification .timeline:nth-child(even) .timeline-year,
  .qualification .timeline:nth-child(even) .title {
    color: #bf7e68;
  }

  .hidden {
    display: none;
  }

  .language {
    display: flex;
    align-items: center;
    padding: 0.25rem 1rem;
    justify-content: space-between;
    max-width: 100%;
    color: #4c241d;
    font-weight: 700;
    font-size: .875rem;
    border-radius: 25px;
    border: 1px solid #bf7e68;
    margin: 0.25rem;
  }

  .language svg,
  .language img {
    width: 2rem;
    height: 2rem;
    margin-right: 0.5rem;
    fill: #4c241d
  }

  .flex {
    display: flex;
    flex-wrap: wrap;
  }

  .skills {
    flex-direction: column-reverse;
  }

  .skills .heading {
    display: flex;
    align-items: center;
  }

  .skills h1 {
    width: 100%;
    text-align: center;
  }

  .skills p {
    margin: 0;
  }


  .recent-posts {
    flex-direction: column;
    text-align: center;
  }

  .btn {
    margin: 1rem auto;
    padding: 0.5rem 1rem;
    border-radius: 100px;
    border: 1px solid #bf7e68;
    text-decoration: none;
  }

  .btn:hover {
    background-color: #bf7e68;
    border-color: #4c241d;
    color: white;
  }

  h1.heading {
    text-align: center;
    color: #4c241d;
  }

  @media (min-width: 768px) {
    section:not(.qualification)>div {
      width: 50%;
    }

    .qualification .timeline-content {
      flex-direction: row;
      margin-left: 0 !important;
      margin-right: 0 !important;
    }

    .qualification .timeline-year,
    .qualification .content {
      width: 50%;
    }

    .qualification .timeline:nth-child(even) .timeline-content {
      flex-direction: row-reverse;
    }

    .language {
      min-width: 100px;
    }

    .skills {
      flex-direction: row;
    }
  }
</style>

<svelte:head>
  <title>Vineeth Asokkumar</title>
</svelte:head>

<section id="intro">
  <div class="">
    <p>I'm Vineeth Asok</p>
    <p class="text-gray-700 text-base">I currently work as a Remote Full-Stack Developer for Seabookings, a Portuguese
      Marine Tourism Company.</p>
    <p class="text-gray-700 text-base">I have an interest in Web Development and this is one of a way which I wish to
      use to
      enhance my knowledge and
      understanding of the same.</p>
    <div class="social-icons">

      <a class="facebook" href="https://www.facebook.com/asokvineeth">
        <svg>
          <use xlink:href="fa.svg#facebook"></use>
        </svg>
      </a>
      <a class="github" href="https://github.com/vineethasok">
        <svg>
          <use xlink:href="fa.svg#github"></use>
        </svg>
      </a>
      <a class="gitlab" href="https://gitlab.com/vineethasok">
        <svg>
          <use xlink:href="fa.svg#gitlab"></use>
        </svg>
      </a>
      <a class="linkedin" href="https://www.linkedin.com/in/vineethasok/">
        <svg>
          <use xlink:href="fa.svg#linkedin"></use>
        </svg>
      </a>
      <a class="mail" href="mailto:me@vineethasok.com">
        <svg>
          <use xlink:href="fa.svg#envelope"></use>
        </svg>
      </a>
      <a class="resume" href="https://drive.google.com/file/d/1fw8VTGh4GFlpQHQJlLZC4cznkbgJBzDO/view?usp=sharing">
        <svg>
          <use xlink:href="fa.svg#file-alt"></use>
        </svg>
      </a>
    </div>
  </div>
  <div class="profile-pic">
    <img src="images/vinu.jpg" alt="index-img" />
  </div>
  <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path fill="#4c241d" fill-opacity="1"
      d="M0,96L6.2,101.3C12.3,107,25,117,37,128C49.2,139,62,149,74,170.7C86.2,192,98,224,111,218.7C123.1,213,135,171,148,170.7C160,171,172,213,185,224C196.9,235,209,213,222,224C233.8,235,246,277,258,293.3C270.8,309,283,299,295,272C307.7,245,320,203,332,202.7C344.6,203,357,245,369,240C381.5,235,394,181,406,176C418.5,171,431,213,443,197.3C455.4,181,468,107,480,112C492.3,117,505,203,517,234.7C529.2,267,542,245,554,240C566.2,235,578,245,591,256C603.1,267,615,277,628,245.3C640,213,652,139,665,117.3C676.9,96,689,128,702,138.7C713.8,149,726,139,738,112C750.8,85,763,43,775,74.7C787.7,107,800,213,812,266.7C824.6,320,837,320,849,314.7C861.5,309,874,299,886,266.7C898.5,235,911,181,923,181.3C935.4,181,948,235,960,256C972.3,277,985,267,997,261.3C1009.2,256,1022,256,1034,256C1046.2,256,1058,256,1071,213.3C1083.1,171,1095,85,1108,96C1120,107,1132,213,1145,261.3C1156.9,309,1169,299,1182,272C1193.8,245,1206,203,1218,208C1230.8,213,1243,267,1255,256C1267.7,245,1280,171,1292,117.3C1304.6,64,1317,32,1329,26.7C1341.5,21,1354,43,1366,64C1378.5,85,1391,107,1403,117.3C1415.4,128,1428,128,1434,128L1440,128L1440,0L1433.8,0C1427.7,0,1415,0,1403,0C1390.8,0,1378,0,1366,0C1353.8,0,1342,0,1329,0C1316.9,0,1305,0,1292,0C1280,0,1268,0,1255,0C1243.1,0,1231,0,1218,0C1206.2,0,1194,0,1182,0C1169.2,0,1157,0,1145,0C1132.3,0,1120,0,1108,0C1095.4,0,1083,0,1071,0C1058.5,0,1046,0,1034,0C1021.5,0,1009,0,997,0C984.6,0,972,0,960,0C947.7,0,935,0,923,0C910.8,0,898,0,886,0C873.8,0,862,0,849,0C836.9,0,825,0,812,0C800,0,788,0,775,0C763.1,0,751,0,738,0C726.2,0,714,0,702,0C689.2,0,677,0,665,0C652.3,0,640,0,628,0C615.4,0,603,0,591,0C578.5,0,566,0,554,0C541.5,0,529,0,517,0C504.6,0,492,0,480,0C467.7,0,455,0,443,0C430.8,0,418,0,406,0C393.8,0,382,0,369,0C356.9,0,345,0,332,0C320,0,308,0,295,0C283.1,0,271,0,258,0C246.2,0,234,0,222,0C209.2,0,197,0,185,0C172.3,0,160,0,148,0C135.4,0,123,0,111,0C98.5,0,86,0,74,0C61.5,0,49,0,37,0C24.6,0,12,0,6,0L0,0Z">
    </path>
  </svg>
</section>
<h1 class="heading">Qualifications</h1>
<section class="qualification">
  <div class="timeline">
    <div class="timeline-content">
      <div class="timeline-year">
        <svg class="timeline-icon">
          <use xlink:href="fa.svg#laptop-code"></use>
        </svg>
        <div>2019 - Present</div>
      </div>
      <div class="content">
        <h3 class="title">Seabookings</h3>
        <p class="description">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s.
        </p>
      </div>
    </div>
  </div>
  <div class="timeline">
    <div class="timeline-content">
      <div class="timeline-year">
        <svg class="timeline-icon">
          <use xlink:href="fa.svg#laptop-code"></use>
        </svg>
        <div>2016 - 2019</div>
      </div>
      <div class="content">
        <h3 class="title">Zoho Corporation</h3>
        <p class="description">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s.
        </p>
      </div>
    </div>
  </div>
  <div class="timeline">
    <div class="timeline-content">
      <div class="timeline-year">
        <svg class="timeline-icon">
          <use xlink:href="fa.svg#graduation-cap"></use>
        </svg>
        <div>2011 - 2016</div>
      </div>
      <div class="content">
        <h3 class="title">MS SOFTWARE ENGINEERING</h3>
        <p class="description">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s.
        </p>
      </div>
    </div>
  </div>
</section>
<section class="skills">
  <div class="flex">
    <div class="language">
      <img src="svgs/programming-icons/svelte.svg" alt="Svelte Icon" />
      <p>Svelte</p>
    </div>
    <div class="language">
      <svg class="icon">
        <use xlink:href="fa.svg#vuejs"></use>
      </svg>
      <p>Vue</p>
    </div>
    <div class="language">
      <svg class="icon">
        <use xlink:href="fa.svg#ember"></use>
      </svg>
      <p>Ember JS</p>
    </div>
    <div class="language">
      <svg class="icon">
        <use xlink:href="fa.svg#java"></use>
      </svg>
      <p>Java</p>
    </div>
    <div class="language">
      <svg class="icon">
        <use xlink:href="fa.svg#python"></use>
      </svg>
      <p>Python</p>
    </div>
    <div class="language">
      <img src="svgs/programming-icons/ruby.svg" alt="Svelte Icon" />
      <p>Ruby on Rails</p>
    </div>
    <div class="language">
      <img src="svgs/programming-icons/postgresql.svg" alt="Svelte Icon" />
      <p>PostgreSql</p>
    </div>
    <div class="language">
      <svg class="icon">
        <use xlink:href="fa.svg#react"></use>
      </svg>
      <p>React</p>
    </div>
    <div class="language">
      <svg class="icon">
        <use xlink:href="fa.svg#html5"></use>
      </svg>
      <p>HTML5</p>
    </div>
    <div class="language">
      <svg class="icon">
        <use xlink:href="fa.svg#css3-alt"></use>
      </svg>
      <p>CSS3</p>
    </div>
    <div class="language">
      <svg class="icon">
        <use xlink:href="fa.svg#js"></use>
      </svg>
      <p>Javascript</p>
    </div>
    <div class="language">
      <svg class="icon">
        <use xlink:href="fa.svg#sass"></use>
      </svg>
      <p>SASS/ SCSS</p>
    </div>
    <div class="language">
      <svg class="icon">
        <use xlink:href="fa.svg#node"></use>
      </svg>
      <p>Node JS</p>
    </div>
    <div class="language">
      <svg class="icon">
        <use xlink:href="fa.svg#git"></use>
      </svg>
      <p>Git</p>
    </div>
    <div class="language">
      <img src="svgs/programming-icons/rest-api.svg" alt="Svelte Icon" />
      <p>REST API</p>
    </div>
    <div class="language">
      <img src="svgs/programming-icons/jquery.svg" alt="Svelte Icon" />
      <p>jQuery</p>
    </div>
  </div>
  <div class="heading">
    <h1>Programming Skills</h1>
  </div>
</section>
<section class="recent-posts">
  <h1>Recent Posts</h1>
  <CardList contentArray="{blog.posts}" />
  <a href="/blog" rel="prefetch" class="btn">View More</a>
</section>
<div class="hidden">
  Icons made by <a href="https://www.flaticon.com/authors/photo3idea-studio"
    title="photo3idea_studio">photo3idea_studio</a> from <a href="https://www.flaticon.com/"
    title="Flaticon">www.flaticon.com</a>
  <a target="_blank" href="https://icons8.com/icons/set/postgreesql">PostgreSQL</a>, <a target="_blank"
    href="https://icons8.com/icons/set/svetle">Svelte</a> and other icons by <a target="_blank"
    href="https://icons8.com">Icons8</a>
</div>