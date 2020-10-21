import React from 'react'
import './Article.css'
import {Row, Col} from 'react-bootstrap'

const Article = () =>{
    return(
    <Col md={{ span: 11, offset: 0.9 }} className="p-4 ml-5">
    <Row>
      <div className="article-image-wrapper">
      <img src="https://i.ibb.co/6ng9c19/road1.webp" className="article-img"></img>
      <div className="text-wrapper px-5 pb-3">
      <div className="article-title"><h1>Article Title</h1></div>
      </div>
      </div>
    </Row>
    <Row>
        <div className="article-content-text">
        <Row className="additional-info pb-4 pl-3"><Col className="pr-2" md={{ span:1.5 }}><p>Posted on</p></Col>|<Col className="pl-2" md={{ span:1.5 }}><p>Auhor</p></Col> <Col md={{ offset:7 }}><p>Credit Picture</p></Col></Row>

       <p>Lorem ipsum dolor sit amet, no vis porro facer, clita animal maiorum his ei. Dicant doming no sea, ut quo reque melius. Congue labores vix no. Qui viris prompta ea. Quem cibo quando ne mel, legere regione necessitatibus vix te.

Cu suas nihil aperiam usu. Ad cum persius appetere, an congue possit debitis pri. Sea ea assum efficiendi. Eum ne hinc omnis concludaturque, at eum laudem voluptua, ceteros definitionem at usu.</p><p> No tale elit eum, sententiae repudiandae ne eum, ei eum suas tollit sadipscing.

Eam graeco eripuit prodesset an, est nihil abhorreant interpretaris no. Duo primis aliquid ei, eu qui commodo alterum luptatum. Perpetua rationibus duo no, id has facer nobis dolor, falli paulo inermis at sed. Posse aperiam concludaturque at eam, mutat iudico accusamus sed ad.

Civibus prodesset his ne. Ius discere dissentiet eu, eam ubique iracundia at.</p> His graeco nostrud vulputate et, vocibus accusamus complectitur te nam. Duis quaestio facilisis cu sea, lorem lucilius eos te, no soleat iudicabit voluptatibus nec.<p>  Falli sonet honestatis sea ex. Te purto veri phaedrum eum, et eum amet veritus torquatos.

Fastidii perfecto ei cum, feugait suscipiantur eu mel. Ne elit omnium pertinacia sed, te mel brute nusquam expetendis. Mea ex invenire intellegam, choro convenire vim in. At solet menandri qui, quo aeque viris eu. Natum labitur vix an, no tamquam feugait per, idque denique imperdiet cu sea. Dicunt nostrum abhorreant ut vix, id vix fugit laoreet efficiendi.</p>
</div>
    </Row>
    </Col>
    )
}

export default Article