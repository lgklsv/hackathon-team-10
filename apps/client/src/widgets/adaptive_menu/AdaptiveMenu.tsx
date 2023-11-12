import React from 'react';
import Media  from 'react-media';
import MobileMenu from "@/widgets/mobile_menu/MobileMenu.tsx";
import {Header} from "@/widgets/header";

interface MenuProps {
  // Передавайте пропсы для мобильного и обычного меню
}


const AdaptiveMenu = () => {
  return (
    <Media queries={
      { small: '(min-width: 320px) and (max-width: 767px)',
        medium: "(min-width: 768px) and (max-width: 1199px)",
        large: "(min-width: 1200px)"}
    }>
      {(matches: any) => (
        <>
          {matches.small && <MobileMenu/>}
          {matches.medium && <Header/>}
          {matches.large && <Header/>}
        </>
      )}
    </Media>
  );
}

export default AdaptiveMenu;

