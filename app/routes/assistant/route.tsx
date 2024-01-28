import { ActionFunctionArgs } from "@remix-run/node";
import { dutchLanguageAssistant } from "~/langchain.server/dutch-assistant";

const heavyQuestion = `
Kan je de volgende tekst samenvatten in 3 alinieas:
"""
Poolse boeren protesteren in Zbuczyn, eerder deze week. Hun protest richt zich vooral tegen het Europese landbouwbeleid.
Foto Przemyslaw Piatkowski/EPA

Ze wil in gesprek met de boeren. Polarisatie overwinnen. Dat was donderdag de boodschap van EU-commissievoorzitter Ursula von der Leyen bij de aftrap van haar langverwachte ‘strategische dialoog’ met vertegenwoordigers van de landbouwsector. De bijna dertig deelnemende organisaties moeten voor de zomer hun ideeën over de toekomst van Europa delen met Von der Leyen.

Komt deze dialoog te laat? Nadat Duitse boeren het jaar begonnen met massale protesten, trokken deze week ook in Italië, Litouwen, Roemenië en Polen colonnes trekkers door het winterse landschap en blokkeerden steden en dorpen. In Frankrijk overleden twee mensen na een aanrijding bij een wegblokkade en lieten radicale wijnboeren een bom afgaan bij een overheidsgebouw in het zuidelijke Carcassonne. In Brussel bungelde een blauwe koe met de sterretjes van de Europese vlag op haar lijf aan een strop onder een graafmachine. De boeren zijn boos.

Op het oog lijken de protesten uiteenlopende redenen te hebben. In Frankrijk en Duitsland winden boeren zich op over een geschrapte korting op dieselbelasting. In Spanje maken ze zich kwaad omdat ze geen rivierwater meer mogen gebruiken om de uitgedroogde akkers te irrigeren. In Ierland marcheerden boeren met koeien door de straten in protest tegen beperkingen voor de veehouderij. Poolse, Hongaarse en Slowaakse boeren blokkeerden wekenlang in de vrieskou de grens met Oekraïne om de import van goedkoop graan tegen te houden.

Lees ook Franse premier komt protesterende boeren tegemoet door belastingvoordeel landbouwdiesel te behouden
De Franse premier Gabriel Attal ontmoet Franse boeren op een veeboerderij in Montastruc-de-Salies, in Zuid-Frankrijk.

Waar de stikstofprotesten in Nederland in 2019 nog veel opzien baarden, lijkt het hele Europese platteland nu in beroering. En de ogenschijnlijk afzonderlijke frustraties hebben wel degelijk van alles met elkaar te maken.
Speelbal

„Het is zeker niet toevallig dat boeren nu overal in Europa de straat op gaan”, stelt Niels Debonne, geograaf bij het Instituut voor Milieuvraagstukken aan de Vrije Universiteit Amsterdam. Ondanks de lokale verschillen lijden de boeren volgens Debonne allemaal onder hetzelfde systeem: „De onafhankelijke boer, alleen op zijn erf, die bestaat niet in Europa. Alle boeren zijn verwikkeld in een web van regelgeving en ze zijn zwaar afhankelijk van subsidies.”

Landbouwsubsidies zijn de grootste uitgavenpost van de Europese Unie. Bijna een derde van het totale budget gaat naar het gemeenschappelijk landbouwbeleid. En dat is niet voor niets: na de Tweede Wereldoorlog was voedselzekerheid een topprioriteit. Toen de Europese markt werd opengesteld en de concurrentie toenam, verzekerden de landbouwsubsidies boeren van een goede levensstandaard. Ze drukten de prijzen, garandeerden de voedselvoorziening en gaven boeren zekerheid en de mogelijkheid om te investeren. Maar de subsidies waren ook een vloek voor de boeren.
Franse boeren blokkeren de snelweg bij Saint-Arnoult, ten zuiden van Parijs.
Foto Christophe Ena/AP

„De boeren zijn afhankelijk gemaakt van een systeem dat gericht was op efficiëntie en modernisatie”, zegt Debonne, „een systeem waarin groei en industrialisering centraal stonden.” Dat systeem heeft veel boeren uiteindelijk diep in de schulden gestort bij banken om te kunnen blijven investeren en groeien. Debonne: „Boeren zijn een speelbal geworden van de overheid en agro-industrie.”
"""
`;

export const loader = async () => {
  const response = await dutchLanguageAssistant.invoke({
    input: heavyQuestion,
  });

  return {
    message: response,
  };
};

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();

  const question = formData.get("question");

  if (!question) {
    throw new Response("no question provided", { status: 400 });
  }

  return dutchLanguageAssistant.invoke({
    input: question,
  });
};
