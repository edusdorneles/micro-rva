import { navigateToUrl } from "single-spa";

import "@mfe/styleguide";
import * as S from "./styles";

import ReactLogo from "./assets/images/react.png";
import VueLogo from "./assets/images/vue.png";
import AngularLogo from "./assets/images/angular.png";

const Root = (props) => {
    return (
        <S.NavbarContainer>
            <div className="container">
                <S.NavbarTitle>Micro RVA</S.NavbarTitle>

                <S.NavbarLinks>
                    <S.NavbarLink onClick={() => navigateToUrl("/")}>
                        <img src={ReactLogo} alt="React logo" />
                        React
                    </S.NavbarLink>

                    <S.NavbarLink onClick={() => navigateToUrl("/vue")}>
                        <img src={VueLogo} alt="Vue logo" />
                        Vue
                    </S.NavbarLink>

                    <S.NavbarLink onClick={() => navigateToUrl("/angular")}>
                        <img src={AngularLogo} alt="Angular logo" />
                        Angular
                    </S.NavbarLink>
                </S.NavbarLinks>
            </div>
        </S.NavbarContainer>
    );
};

export default Root;
