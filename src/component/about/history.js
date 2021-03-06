import React from 'react'
import image1 from '../../assets/ars.jpg'
import arsene from '../../assets/arsen.jpg'
import './about.scss'

function History() {
  return (
    <div>
        <div className="container">
            <div className="history-cont">
                <div className="history-image"><img src={image1} alt=""/></div>
                <div className="history-desc">
                    <p> Bevoice is non-Government non-profit organization founded by A Humanitarian activist in 2019 to support 
                        the community experiencing extremely poverty, limited access to education and health.
                    </p>
                    <p> In Bevoice we are passionate and committed to be a voice and advocate for those people 
                        through different supporters who believe in supporting the vulnerable communities. 
                    </p>
                    <button>Read More</button>
                </div>
            </div>
            <div className="history-boss">
                <div className="history-image-boss">
                    <img src={arsene} alt=""/>
                </div>
                <div className="history-desc-boss">
                    
                    <p>
                        This commitment started when I, Arsene Ishimwe was 15 years old. On my young age I met A boy who spent 
                        his whole entire life in the orphanage due to the genocide against Tutsi 1994 in Rwanda, this young boy 
                        never knew nor a mother or a father which made his life so miserable, he called himself a human with no identity.
                    </p>
                    <p>
                        Due to orphanage life, he was adopted by a family which he was exciting to join and expect to be treated as a kid at home,
                         unfortunately the adopting family put him into home labor like he wasn’t deserving the future as everyone else, fights among them deteriorated and diminished his hope.
                    </p>
                    <p>
                        Luckily he met a kind school director who was touched by his story, she signed him in primary, he was very clever that made him to 
                        pass national examination and the good mother searched for him some sponsorship, his dreams were in steps but unluckily by his third 
                        year to shift in the advanced level the sponsorship stopped. His hope started slowly by slowly to diminish until he found himself as a 
                        street rat with no value and home.
                    </p>
                    <p>
                        Even if he didn’t know his family he was strongly eager to attend school as the only hope that can change his life, he had a hope of becoming a father so that he will feel 
                        comfortable on having a family around him.
                    </p>
                    <p>
                        His faith became faithless that forwarded him to commit suicide but luckily didn’t die so to restrict himself from thinking about himself, he used drugs. I met him over and asked him 
                        the reason why he was doing such unhealthy thing?
                    </p>
                    <p>
                        He replied with sadness that he hadn’t reason to live because he was lonely with no family and home so nothing to lose. I asked him again, what do you wish? He replied, if I had a family, I would not have lived like this, I want to be treated well but nobody is caring.
                    </p>
                    <p>
                        From that day on, I started to ignite his hope by preventing him from drugs taking, I decided to take care of him as his father, I was 18years old that time. That journey took more than 3years, caring him returned his value for rights he didn’t have, now today the orphaned boy formed a group of youth with the same story to protect others from drugs using. His story pushed me to write a book called ‘the dream to solve true thunder storming life-based story book.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default History