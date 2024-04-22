import { podigeeFeed } from '../../lib/episodes';
import { StyledFooter } from './Footer.styles';
import packageInfo from '../../../package.json';

export const Footer = () => {
  return (
    <StyledFooter>
      <p>
        Website erstellt von{' '}
        <a href="https://www.benjaminlutz">Benjamin Lutz</a>
      </p>
      <h4 style={{ marginBottom: 0 }}>Disclaimer</h4>
      <p style={{ marginTop: 2 }}>
        Episodenbilder, Titel und Idee ©{' '}
        <a href="https://www.geschichte.fm/" target={'_blank'} rel="noreferrer">
          GeschichteFM GmbH
        </a>
        . <br /> Als Datenquelle wurde der GeschichteFM Feed von{' '}
        <a href={podigeeFeed} target={'_blank'} rel="noreferrer">
          Podigee.io
        </a>{' '}
        genutzt. Die Genehmigung hierzu wurde am 19.12.2022 bis auf Widerruf
        erteilt. Die Jahreszahlen wurden teils automatisiert aus Titel und
        Beschreibung entnommen, teils sorgfältig per Hand ergänzt. Fehler und
        Änderungen vorbehalten.
      </p>
      <p>
        © {new Date().getFullYear()} Benjamin Lutz |{' '}
        <a href="https://www.benjaminlutz.at/impressum">Impressum</a> | v
        {packageInfo.version}
      </p>
    </StyledFooter>
  );
};
