import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import views from 'config/views';
import {UnderlinedLink} from 'styles/shared/styled-components';
import Pdf from 'doc/resume.pdf';

//data
import {socialIcons} from 'data/social';

//images
import me from 'img/me.jpg';

//styled
import {Image, TitleAndDescription, Title, Description, Contact, Wrapper, ClickableTop, IconList} from './styles';

//components
import MouseScroll from 'components/MouseScroll';
import SocialIcon from 'components/SocialIcon';

@inject('store')
@observer
class KitzeInfo extends Component {

  render() {
    const {store, styles = {}} = this.props;
    const {router} = store;
    const isHome = router.currentView.id === 'home';

    return (
      <Wrapper isHome={isHome} id="kitze-info" styles={styles.Wrapper}>

        <ClickableTop
          isHome={isHome}
          id="clickable-top"
          isClickable={store.router.currentView.id !== 'home'}
          onClick={() => store.router.goTo(views.home, {}, store)}
        >
          <Image isHome={isHome} src={me} alt="me" styles={styles.Image}/>
          <TitleAndDescription>
            <Title isHome={isHome} styles={styles.Title}> Hi, I'm Utkarsh! </Title>
            <Description isHome={isHome} styles={styles.Description}> I learn every day. <br></br><br></br> <UnderlinedLink href={Pdf}>Resume</UnderlinedLink></Description>
          </TitleAndDescription>
        </ClickableTop>

        <Contact>
          <IconList>
            {socialIcons.map((icon, key) =>
              <SocialIcon isHome={isHome} styles={styles.SocialIcon} key={key} icon={icon}/>)}
          </IconList>
        </Contact>

        <MouseScroll/>
      </Wrapper>
    )
  }
}

export default KitzeInfo;
