import React from 'react';

const LoadingIndicator = props => {
  return (
    <div className={props.css}>
      <div className="spinner-border text-info" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

const OnboardingLogo = () => {
  return (
    <img id="onboardingLogo" alt="Onboarding" src="onboarding_logo.svg" />
  );
}

/**
 * (C) Karl Rathmanner
 * This method moves all elements with the given id into the parent container if it's on the same
 * level as the elements to move. Furthermore, it expects the target element id.
 * @param {*} ids -- Array of element id
 * @param {*} targetId -- Target element id to move into
 */
const moveElementsToNewParent = (ids, targetId) => {
  ids.forEach(id => {
    document.getElementById(targetId).appendChild(document.getElementById(id));
  });
};

export { LoadingIndicator, OnboardingLogo ,moveElementsToNewParent };
