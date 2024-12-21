# gag-timeline

Dieses Projekt wurde erstellt von [Benjamin Lutz](https://www.benjaminlutz.at). Ziel war es, die Episoden des Podcasts 'Geschichten aus der Geschichte' chronologisch nach Inhalt zu sortieren und Hörer:innen es zu ermöglichen, die Folgen von Anbeginn der Zeit bis heute hören zu können und die zeitliche Nähe verschiedener Folgen aufzuzeigen.

![](./screenshot.png)

## Über die Daten

Die Episodeninfos werden aus dem offiziellen Podcastfeed gezogen. Zur Einordnung werden Jahreszahlen automatisch aus der Beschreibung der Episode gezogen. Da dies nicht für alle Folgen möglich ist und um Fehler zu korrigieren, wurden die fehlenden Jahreszahlen per Hand ergänzt. Die Daten können [hier](./src/lib/episodeYearData.json) geprüft werden.

## Disclaimer

Episodenbilder, Titel und Idee © [GeschichteFM GmbH](https://www.geschichte.fm/).
Als Datenquelle wurde der GeschichteFM Feed von [Podigee.io](https://geschichten-aus-der-geschichte.podigee.io/feed/mp3) genutzt. Die Genehmigung hierzu wurde am 19.12.2022 bis auf Widerruf erteilt. Die Jahreszahlen wurden teils automatisiert aus Titel und Beschreibung entnommen, teils sorgfältig per Hand ergänzt. Fehler und Änderungen vorbehalten.

## Development

Dieses Projekt wurde mit React erstellt und wird auf Github Pages gehostet. Die verfügbaren Scripte können in der [DEV-Readme](./DEV-README.md) eingesehen werden.

## Contributors

Ein großer Dank für die Unterstützung geht an

- [@mirkolenz](https://github.com/mirkolenz) ![Profile](https://github.com/mirkolenz.png?size=50)
