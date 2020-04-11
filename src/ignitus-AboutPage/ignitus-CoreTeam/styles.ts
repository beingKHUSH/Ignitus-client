/* eslint-disable import/prefer-default-export */
import styled from '@emotion/styled';

import {minimumWidthQuery} from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/media';
import {Heading6} from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/typography';

import * as C from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/colors';
import * as T from '../../ignitus-Shared/ignitus-DesignSystem/shared';
import Icon from '../../ignitus-Shared/ignitus-Utilities/Components/icon';

type LinkWrapperProps = {
  toggle: boolean;
};
type TeamItemTitleProps = {
  color: string;
};

export const TeamItemTitle = styled(Heading6)`
  color: ${C.Black};
  margin-top: 1rem;
`;

styled.a(props => ({color: props.color}));

export const LinkWrapper = styled.div<LinkWrapperProps>(
  {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  props => ({display: props.toggle ? 'flex' : 'none'}),
);

export const PureCoreTeam = styled.div`
  margin-top: 5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TeamContainer = styled(T.Container)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 0 15px;
`;

export const TeamItemImg = styled.img`
  border-radius: 100%;
  width: 6em;
`;

export const TeamCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  text-align: center;
  padding: 1em;
  margin: 0.5em 0.5em;
  min-height: 3em;
  min-width: 3em;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  height: 100%;
`;

export const TeamCardContainer = styled.div`
  cursor: pointer;
  margin-top: 0.5em;
  height: 15em;
  flex: 0 0 35%;
  max-width: 35%;

  ${minimumWidthQuery[1]} {
    flex: 0 0 75%;
    max-width: 75%;
  }

  ${minimumWidthQuery[2]} {
    flex: 0 0 50%;
    max-width: 50%;
  }
  ${minimumWidthQuery[3]} {
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
  }
  ${minimumWidthQuery[4]} {
    flex: 0 0 26%;
    max-width: 26%;
  }
  ${minimumWidthQuery[5]} {
    flex: 0 0 22%;
    max-width: 22%;
  }

  &:hover {
    transform: scale(1.05);
    transition: 0.5s;
  }
`;

export const LinkedIn = styled(Icon)`
  height: 1.2rem;
  fill: ${C.Black};
  &:hover {
    fill: ${C.LinkedinIconColor};
  }
`;

export const AngelList = styled(Icon)`
  height: 1.2rem;
  fill: ${C.Black};
  &:hover {
    fill: ${C.GreyText};
  }
`;

export const Link = styled(T.Link)<TeamItemTitleProps>(props => ({
  color: props.color,
}));