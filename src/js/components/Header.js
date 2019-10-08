import React, { Fragment } from 'react';
import { PAGE_TITLE, PAGE_SUBTITLE } from '../shared/constants';
import { OnboardingLogo } from '../shared/util';

const Header = () => {
    return (
        <Fragment>
            <div style={{ display: 'inline-block' }}>
                <span style={{ paddingRight: 12 + 'px', fontWeight: 'bold', lineHeight: 1.4}}>{PAGE_TITLE}</span>
                <span style={{ paddingRight: 12 + 'px', lineHeight: 1.8 }}>{PAGE_SUBTITLE}</span>
                <OnboardingLogo />
            </div>
        </Fragment>
    );
}

export default Header;