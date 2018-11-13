import React from 'react';

const styles = {
  jumbotron: {
    backgroundImage: "url(https://cdn.cnn.com/cnn/interactive/2018/11/entertainment/dogs-catching-treats-cnnphotos/media/01.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center top",
    backgroundBlendMode: "multiply",
    backgroundColor: "aquamarine",
    minHeight: "30vh",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}

const About = () => (
  <div>
    <div className="jumbotron jumbotron-fluid text-center p-4" style={styles.jumbotron}>
      <h1 className="display-4 text-light">Welcome to the Pupster App!</h1>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6">
          Brooklyn pork belly you probably haven't heard of them pop-up XOXO try-hard Tonx Banksy sartorial banh mi master cleanse vegan Marfa street art 3 wolf moon fap Helvetica artisan farm-to-table gluten-free flannel disrupt iPhone mumblecore sustainable Pitchfork bicycle rights gastropub sriracha lo-fi messenger bag tofu gentrify whatever semiotics kitsch shabby chic cornhole normcore drinking vinegar retro 90's keytar Echo Park ethical Carles Austin readymade fixie butcher yr small batch polaroid church-key synth meggings chia Portland hashtag viral tousled craft beer Schlitz locavore Intelligentsia before they sold out 8-bit fanny pack fingerstache flexitarian crucifix blog organic paleo selfies Tumblr jean shorts pour-over leggings ennui plaid cliche ugh food truck tattooed occupy vinyl bespoke twee salvia raw denim irony mlkshk Vice Blue Bottle Neutra distillery pug Thundercats Etsy Cosby sweater dreamcatcher hoodie selvage authentic mixtape art party direct trade  heirloom Shoreditch skateboard deep v cred aesthetic wolf squid YOLO Williamsburg American Apparel fashion axe scenester Bushwick High Life banjo four loko actually bitters Truffaut pickled VHS Odd Future McSweeney's DIY PBR&B Kickstarter single-origin coffee slow-carb narwhal literally cray wayfarers next level keffiyeh Godard kale chips chambray Wes Anderson asymmetrical post-ironic roof party seitan PBR photo booth trust fund swag letterpress umami freegan brunch cardigan hella typewriter beard mustache lomo stumptown biodiesel +1 put a bird on it tote bag quinoa meh chillwave forage Pinterest kogi
        </div>
        <div className="col-12 col-md-6">
          YOLO semiotics swag Austin narwhal vegan jean shorts single-origin coffee slow-carb XOXO cliche Neutra Cosby sweater next level Truffaut American Apparel banjo Kickstarter twee flexitarian Godard scenester distillery mlkshk keffiyeh farm-to-table Tonx Intelligentsia asymmetrical Pinterest Portland put a bird on it disrupt freegan bitters brunch mixtape occupy lo-fi cornhole pork belly synth 90's hashtag letterpress Schlitz art party gentrify irony 8-bit drinking vinegar polaroid tousled salvia banh mi High Life Banksy Marfa umami hella sartorial Odd Future ethical literally fixie leggings photo booth yr raw denim mustache fashion axe bespoke wayfarers before they sold out organic shabby chic wolf artisan chia meh four loko quinoa stumptown kogi forage iPhone trust fund Pitchfork fap blog vinyl chillwave Helvetica cred paleo Etsy McSweeney's lomo viral pickled Wes Anderson Thundercats master cleanse selvage tattooed pour-over heirloom crucifix cray ennui bicycle rights locavore VHS Tumblr gastropub Echo Park sriracha selfies beard small batch readymade tofu kale chips seitan Williamsburg squid pug mumblecore pop-up actually deep v chambray Blue Bottle whatever biodiesel 3 wolf moon roof party ugh cardigan keytar Carles normcore church-key post-ironic Bushwick fanny pack direct trade  aesthetic PBR fingerstache meggings craft beer dreamcatcher retro DIY typewriter street art sustainable hoodie PBR&B skateboard Vice authentic butcher plaid try-hard Shoreditch food truck +1 kitsch flannel gluten-free you probably haven't heard of them tote bag messenger bag Brooklyn
        </div>
      </div>
    </div>

  </div>
)

export default About;
