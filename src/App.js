import React from "react";
import "./styles.css";
import TwitterTweetEmbed from "./TwitterTweetEmbed";
import Cable from "./Dropwire";
import GDP from "./GDP";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { scrollTop: 0 };
    for (let i = 0; i < 220; i++) {
      this["scrollImg" + i] = React.createRef();
    }
  }
  componentDidMount = () => {
    window.addEventListener("resize", this.refresh);
    window.addEventListener("scroll", this.handleScroll);
    this.refresh(true);
  };
  componentWillUnmount = () => {
    clearTimeout(this.scrollTimeout);
    clearTimeout(this.resizeTimer);
    window.removeEventListener("resize", this.refresh);
    window.removeEventListener("scroll", this.handleScroll);
  };
  handleScroll = (e) => {
    if (!this.state.offScroll) {
      const scrollTop = window.scrollY;
      this.setState(
        {
          scrolling: true,
          scrollTop
        },
        () => {
          clearTimeout(this.scrollTimeout);
          this.scrollTimeout = setTimeout(() => {
            this.setState({
              scrolling: false
            });
          }, 900);
        }
      );
    }
  };
  refresh = (first) => {
    const width = this.state.ios ? window.screen.availWidth : window.innerWidth;
    if (first || Math.abs(this.state.lastWidth - width) > 0) {
      clearTimeout(this.resizeTimer);
      this.resizeTimer = setTimeout(() => {
        this.setState({
          lastWidth: width,
          width,
          availableHeight: this.state.ios
            ? window.screen.availHeight - 20
            : window.innerHeight
        });
      }, 600);
    }
  };
  render() {
    const handleScollImgError = (e) => {
      if (e.message) {
        console.log(e.message);
        this.setState({ serviceCancelingImages: true });
      }
    };
    return (
      <div
        style={{
          width: "calc(100% - 40px)",
          maxWidth: "600px",
          padding: "20px"
        }}
      >
        Jo pinion compares Kyle self defense to attempt at the same, but&nbsp;
        <a href="https://humanharvest.info">self-defense</a>&nbsp;isn’t garnered
        by&nbsp;
        <a href="https://link.springer.com/article/10.1007/s00259-021-05314-2">
          mRNA-sporing-grafts
        </a>
        , net loss bonds profit, with standing to boot
        <br />
        <br />
        Communism is the bastardization. Of the 1/12 crazy person on a
        convicting jury, as to revolt against the time-series of individual
        labor equity (public parks, durable-goods/ham) savings, in tort, as
        capitalism always corrupts itself. Marx would end there. I suspect it is
        because the Wealth of Nations by Adam Smith's assumption of
        infinite-producers was not taken seriously enough, like&nbsp;
        <a href="https://open.spotify.com/episode/4MpKkdFR4jD33UX6xO2Lb3?si=_CAckkZCSjWuBd1V863Jdg">
          emulating randmomness
        </a>
        &nbsp;in Statistics... Voluntary is best exogenous basis rate fix, and
        cohort size is integral to age-standardization
        <br />
        <br />
        Uspto international has less propensity for broadness
        <h2>
          bancruptcy wishes to credit cycle, marx was first to critique the
          mises, "business cycle," or maybe another word for shmita, except they
          keep down payments and reposess, not cancel. bottom-left
          SaverParty.xyz wishes to amortize, not bailout.&nbsp;
          <a href="https://www.federalreservehistory.org/essays/glass-steagall-act#:~:text=The%20Glass%2DSteagall%20Act%20effectively,Roosevelt%20in%20June%201933.">
            don't obama my bernie
          </a>
        </h2>
        "what is so hard about calling yourself a capitalist?" probably the
        infinite producer assumption, and racketeering counterfeit in contract,
        down payments kept upon recollateralization
        <br />
        <h2>productivity isn't gdp/p, it is price-deflation over hours</h2>
        <br />
        <Cable
          style={{ padding: "10px" }}
          onError={handleScollImgError}
          src={
            this.state.serviceCancelingImages
              ? ""
              : "https://drive.google.com/file/d/1KdzgLEjyCUfO8SJuuC5aqGxDDH4rihF2/preview"
          }
          float="left"
          title="Tom Basile - 100k americans died from oxy april, 2020-21"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + 16]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        A lethal dose for every living American it is so small and used in
        extreme pain-reduction cases, 100k == missing children. Both issues can
        be fixed with&nbsp;
        <a href="https://teapharmacy.party">open-source-licensure</a>, no
        false-bid-pools &&nbsp;
        <a href="https://thumbprint.us/phone">convict intranet</a>
        <br />
        <br />
        I am literally better than all of the lawyers
        <br />
        class precendece malfeasance
        <br />
        “It’s gotta be the 40% who stand up, not me.” THEN WHY ARE YOU ON
        INSTEAD OF ME? Bitch
        <br />
        Fucking eldercare in casting more like, on the Tom Bastile show
        <br />
        <a href="https://www.ftc.gov/sites/default/files/documents/statutes/credit-card-accountability-responsibility-and-disclosure-act-2009-credit-card-act/credit-card-pub-l-111-24_0.pdf#page=21">
          73% 50+ pro-AARP
        </a>
        <h2>
          oh look,&nbsp;
          <a href="https://www.americanbar.org/groups/litigation/committees/commercial-business/boilerplate-contracts/third-party-contract-beneficiaries/">
            racketeering tortious-claim
          </a>
          &nbsp;what would be truncated sales tax flat flat tax would pay for
          free rider immutable sewage police
          (non-bond-net-loss-profit-per-incarceration-10-40%-laundering, 40-50%
          spending not trading)&nbsp;&nbsp;
          <a href="https://wavv.art">LAWSUITS</a>
        </h2>
        outlay corporate profit today! tax for consumer free rider immutable
        immediate escrow concurrentable units or unit collective-bargaining (not
        insurance belaying deductible for premium and producer-work-deficit),
        and tort&nbsp;
        <a href="https://www.ftc.gov/tips-advice/competition-guidance/guide-antitrust-laws/dealings-competitors/price-fixing">
          appraisals
        </a>
        &nbsp;of third party beneficiary
        <br />
        <h2>free rider mutable tax and 40-50% debt spend</h2>
        "Most people use it to pay wall st, what do you think they do with their
        money?" Grover Nordquist
        <br />
        <h2>google.com/search?q=how+to+apply+for+local+reporter+12k</h2>
        new business{" > "}existing business
        <br />
        1/12 upon conviction is only crazy, lest dent in head or hate
        indiscriminate
        <br />
        501 IP to government laundered,&nbsp;
        <a href="https://saverparty.xyz">socialism</a>&nbsp;is anti-rent-seeking
        dead-weight-label indiscriminate.
        <h2>
          Government/wall st 40/60 gentrification, rent-seeking, trust-building,
          competing-with-consumers, prohibiting price-inelasticity of bid-to-ask
          and prohibiting trade:
        </h2>
        "Ports, broadband, bridge-traffic-tolls," while we have the technology
        njta STILL services nearly 40% of revenue on debt, and they
        financially-"invest" in outlays that they have nothing to do with on
        asset-tangible
        <br />
        <h2>
          childcare/industry-vocational loss of durable-good/service when you
          don't merely target margin networks and finite producers for
          micreconomic reasons
        </h2>
        public insurance doesn’t do anything differently than private. We need
        to ban these&nbsp;
        <a href="https://youtu.be/aJEszZK54dw">false bid pools</a>&nbsp;and the
        invoices they abet on third party beneficiary grounds
        <br />
        <h2>
          'growth brings profits into the american peiple, i mean the emerican
          government'- Russ on CBO from Center for Renewing america.
        </h2>
        'Economic winners' or price deflation over hours? The latter if tech
        advancement is espoused by price deflation. Otherwise those “economic
        winners,” are more like, “busy work.” 'Inflation will be worse,' unless
        we amortize & alternative finance to max profit royalty, for
        lender/landlord work deficit can solve the working age supply chain
        issue
        <h2>
          self-defensive-threats, when third party beneficiary law is malfeasant
        </h2>
        <h2>
          <a href="https://carducci.us">amortize, don't</a>&nbsp;cancel nor keep
          down payments upon repo, ppp trust-building && laundering
        </h2>
        lower profits by not-trust-building but actual margin-targeting would
        emulate supply and demand would increase labor, being
        hours/propensity-to-work
        <br />
        "subsidies for everyone, at least," a person on Larry Kudlow's show
        pleads
        <br />
        we need to make an amendment to make it better for corporations to be
        domesticated,"
        <br />
        <a href="https://www.academia.edu/43983364/Review_Capitalism_in_the_21st_Century">
          like slavery
        </a>
        , nationalism/technological-advancement-by-pareto-efficiency without
        dead-weight-rentier nor corporate-profits withheld by
        oligolopies/(self-employed), public companies pay twice corporation tax
        for government-beyond article-4 into free-rider-mutable tax & 40-50%
        fed-state debt-spend, 10-40% bond-laundering debt-service, rent-seeking
        to go public, to boot, is retarded.
        <br />
        <br />
        <Cable
          style={{ width: "100%", height: "560px" }}
          onError={handleScollImgError}
          src={
            this.state.serviceCancelingImages
              ? ""
              : `https://fred.stlouisfed.org/graph/graph-landing.php?g=HzlI&width=670&height=475`
            //"https://fred.stlouisfed.org/graph/?g=Gkvt"
          }
          float="right"
          title="https://fred.stlouisfed.org/graph/?g=HzlI"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + 14]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        this is why non-experts shouldn't espouse conclusions of experts without
        understanding their assumptions
        <h2>
          price deflation over hours, jury-permitting trumps bending over for
          the finite producer right.
        </h2>
        {!isNaN(this.state.width) && (
          <GDP width={Math.min(600, this.state.width)} />
        )}
        The right & top thinks DeSantis is good for bypassing jury-rules for
        permitting duress within minimal viable production and voluntary trade,
        and that testing bybyproduct asymptomatically determines cause, with
        insignificant aggregate deaths/population. You are loitering as a
        borrower, and working for a corporation is a net loss of individual
        profits. I own the market thru copyright, your market commune owns all
        the work you've done. Selling out of durable-goods/services is additive
        to gdp, which is retarded.
        <Cable
          style={{ width: "100%", height: "560px" }}
          onError={handleScollImgError}
          src={
            this.state.serviceCancelingImages
              ? ""
              : `https://fred.stlouisfed.org/graph/graph-landing.php?g=Gkvt&width=670&height=475`
            //"https://fred.stlouisfed.org/graph/?g=Gkvt"
          }
          float="right"
          title="https://fred.stlouisfed.org/graph/?g=Gkvt"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + 9]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        <br />
        <br />
        We gotta wrap it up rollup nomenclature software development knows more
        academic, politics, reason, law, the edge of flat earth
        <div>
          <h1>FREE RIDER MUTABLE NATION</h1>
          <h2>
            sewage police lawsuits, collective bargaining immediate-escrow
            units-conccurrentable, not false bid pools of hidden premiums when
            40-50% debt-spending fed-state... 10-40% fed-state
            bond-laundering(debt-spending). apples to oranges competes too =
            subsidies for&nbsp;
            <a href="https://magnate.company">charging-stations</a>.
            consumer-surrogate rent-seeken broadband/tolls with
            privately-target-margin instead of gov-gentrification, in all its
            ways in housing, healthcare...
          </h2>
        </div>
        Retard belie forlorn becoming tarded self harm, afro-tool,
        discrimination for these words is really Douchey
        <br />
        <br />
        “Know how to get rich quick,” belies Rudy referring to down payment
        repossession upon repossession as integrally-derivative-rate-of-change
        for third party beneficiary as false bid pools and implausible landlord
        use
        <br />
        <br />
        <Cable
          style={{
            height: "440px"
          }}
          onError={handleScollImgError}
          //img={true}
          src={
            this.state.settleDropboxFree
              ? ""
              : "https://www.dl.dropboxusercontent.com/s/5jmlz813kivmxc3/Rogan%20better%20angels%20finite%20producers.MP4?dl=0"
          }
          float="right"
          title=""
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + 12]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        A freelancer for msnbc for blowing red light is irrelevant, and is as
        much onus derived from a contractor estimate with changing intermediate
        demand
        <Cable
          onError={handleScollImgError}
          src={
            this.state.serviceCancelingImages
              ? ""
              : "https://drive.google.com/file/d/1ys9b82WhTKYaQGzV-h_UH3CwoN8B96gL/preview"
          }
          float="left"
          title="Peter 'virus is alive' Morcini"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + 11]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        Monpoly is the reason for inflation, not exclusively money printing
        (share-split), as with working age and lender work deficit for being
        untowards price deflation over hours (DRIP)
        <br />
        <br />
        I took it doesn’t because it was an offensive-threat, but because others
        thought it was
        <br />
        <br />
        gift cards illegal to expire? I think so. ftc says it is state issue
        now, ftc says
        <br />
        <br />
        enslaving generations of people by wall st/gov 60/40 wealth inequality
        by third party beneficiary lender-work-deficit
        <br />
        <br />
        the most engaging comes about by algorithmic censorship? no... the most
        contrived
        <br />
        <br />
        rent-seeking operational-costs, public & private
        <br />
        Selling out on&nbsp;
        <a href="https://open.spotify.com/track/1nyWxVfSonPbt7pTCrPbah?si=c967f067d0d4472a">
          perpetual
        </a>
        &nbsp;durable motion good&nbsp;
        <a href="https://magnate.company">machine</a>&nbsp;for services and
        hamburgers
        <iframe
          style={{ width: "100%", height: "400px" }}
          src="https://www.youtube.com/embed/10kjUOVqk7o"
          title="YouTube video player"
        />
        <h1>
          Amortize, don't cancel nor bailout, then&nbsp;
          <a href="https://carducci.us">truncate sales tax 2025</a>&nbsp;
          against menendez
        </h1>
        Accrual and premiums over monthly savings is retarded, not savings
        <Cable
          style={{ width: "100%", height: "330px", maxHeight: "35vw" }}
          onError={handleScollImgError}
          src={
            this.state.serviceCancelingImages
              ? ""
              : "https://drive.google.com/file/d/1aLHSTZdvS5Jw47YOsRz1WaG1j0Sr3COQ/preview"
          }
          float={null}
          title="Outlays to debt 40% revenue 60%, not tax-payer"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + 10]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        <a href="https://ballotpedia.org/New_Jersey_state_budget_and_finances">
          stop saying tax payer funded
        </a>
        , bitch, that is my money, drop dead
        <Cable
          style={{ width: "100%", height: "560px" }}
          onError={handleScollImgError}
          //img={true}
          src={
            this.state.settleDropboxFree
              ? ""
              : `https://fred.stlouisfed.org/graph/graph-landing.php?g=H5XB&width=670&height=475`
          }
          float="right"
          title="https://fred.stlouisfed.org/graph/?g=H5XB"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + 10]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        <Cable
          style={{ width: "100%", height: "560px" }}
          onError={handleScollImgError}
          //img={true}
          src={
            this.state.settleDropboxFree
              ? ""
              : `https://fred.stlouisfed.org/graph/graph-landing.php?g=FSwQ&width=670&height=475`
          }
          float="right"
          title="https://fred.stlouisfed.org/graph/?g=FSwQ"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + 13]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        <Cable
          style={{ height: "440px" }}
          onError={handleScollImgError}
          src={
            this.state.serviceCancelingImages
              ? ""
              : "https://drive.google.com/file/d/1Lg5X9aSV-1yqm_sfMQnfqmKp8K4iIRql/preview"
          }
          float="right"
          title="539 tries to talk about polling with Mr. Random himself, then"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + 9]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        <h2>
          inflation isn't known how long it will take for wages to increase
          intermediate hamburger-service/perpetual-motion-machine
          collectively-bargained public park
        </h2>
        non-voters have plural majority and simple when without ideological
        duress of wall st pharma cop v wall st pharma cop instead of 11/12
        determination of desistation, permittance of duress within minimal
        viable product or conviction, lest payment with comment for
        discrimination, lest reciprocation of discriminateds' products, therfore
        a "nuclear-dilemma"
        <br />
        <br />
        <Cable
          style={{ height: "500px" }}
          onError={handleScollImgError}
          src={
            this.state.serviceCancelingImages
              ? ""
              : "https://drive.google.com/file/d/1SYZjIEl2SHmFlA7J5X4G-xMb2_t9yfa-/preview"
          }
          float="left"
          title="National Report slanders socialism AGAIN"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + 11]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        <h1>
          Marxism, introduced by the, "[application of infinite producers by
          labor outlaid profits without delay]," in Schumpeter
        </h1>
        <a href="https://carducci.sh">We want jury-permits</a>, not infinite
        producer reasoning what duress is requited by a minimal viable product
        <br />
        We just want to amortize, nor cancel, bailout, nor keep this credit
        cycle of keeping down payments upon reposession, beyond third party
        beneficiary law and comparative/natural law reasoning that which to each
        their own, without aggression, financially to compete with consumers
        like implausible landlord use and false bid pool brokering in insurance
        "collective bargaining" fraud loitering on the real demand
        <br />
        “Non-scientific, randomly enforced,” Cheryl Chumley slanders socialism
        <br />
        <br />
        <span role="img" aria-label="bottom-left">
          ↙️
        </span>
        Output production of price-deflation per hour is of propensity to their
        own hourly efforts
        <Cable
          onError={handleScollImgError}
          src={
            this.state.serviceCancelingImages
              ? ""
              : "https://drive.google.com/file/d/1F3kU7lqYR2Nqvv_X_wsVYMTOICoXM33X/preview"
          }
          float="left"
          title="The open-carry-without-luggage right in Wisconsin slanders Marx as an arsonist"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + 8]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        <h2>
          voluntary is more random than emulated, as we should for
          finite-producers, comparative law over class precedence malfeasance,
          jury-permits/target-margin, consumer-surrogates
        </h2>
        <a href="https://www.marxists.org/archive/marx/works/1848/communist-manifesto/ch02.htm">
          Where does Marx say he wants to burn things
        </a>
        ? margins outlaid immediately
        <br />
        what are you talking about?&nbsp;
        <a href="https://monthlyreview.org/2020/07/01/marx-and-slavery/#:~:text=It%20is%20worth%20noting">
          He is talking about the credit cycle
        </a>
        &nbsp;(down payments kept upon foreclosure)
        <br />
        defense of livelihood of fractional reserve in contract,
        false-savings-bid-expiring-pool is not “Political violence, to use your
        platform to depict violence depleting the credibility of this body,”
        <br />
        <br />
        no surrender = claim as much time as i can consume implausible use
        impossible settlement intentful
        <br />
        <br />
        Socialists’ dream, “tax increases for small businesses,” a socialists
        dream would be to outlay
        <br />
        <a href="https://fred.stlouisfed.org/graph/?graph_id=961160&rn=793">
          Home sale price changes Percent of new debt
        </a>
        <br />
        <a href="https://fred.stlouisfed.org/graph/?g=C6m9">
          Debt percent of gdp
        </a>
        <br />
        <a href="https://fred.stlouisfed.org/graph/?g=G8nU">
          Debt share of mortgages and federal debt
        </a>
        <br />
        expiring-insurance, third-party-beneficiary malfeasance,
        raffle-licensing-monopsony incite violence
        <br />
        <div
          style={{
            height: "min-content"
          }}
        >
          <TwitterTweetEmbed
            style={{
              float: "left"
            }}
            key="1421471623136358405"
            tweetId="1421471623136358405"
          />
        </div>
        <Cable
          style={{ height: "440px" }}
          onError={handleScollImgError}
          src={
            this.state.serviceCancelingImages
              ? ""
              : "https://drive.google.com/file/d/1k1Q7mfwZ96mzffl7YcEHuzwP-39l3wjg/preview"
          }
          float="right"
          title="nextdoor.com - 54%/38% n = 13, (8%=1)"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + 7]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        If electric-cars are feasbile, there is no reason for illiquidity. They
        had earlier denied my call for the rental-income problem solved by
        "pillar of Saver Party, to cap rent at quantity, not price." After I had
        presented the idea here on WABC, but before this nextdoor.com poll
        <span>
          release the antibiotics (open-source, cash-tuition without
          non-consumer money, rental-units)
        </span>
        <Cable
          onError={handleScollImgError}
          src={
            this.state.serviceCancelingImages
              ? ""
              : "https://drive.google.com/file/d/1FSwqDP5OcRPA2G0WY5aDiK6OnrI4kujm/preview"
          }
          float="left"
          title="Brian Kilmeade portrait"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + 6]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        "dealing with car repairs seems like a lose-lose situation, that's why
        you need Carsheild "plans," expiring-insurance is a net-harm... claims
        bargained for with middle-man-insurance that cannot be withdrwawaln at
        once is already illegal per the surrendering of your consumers' money
        with the false pooled bid - to which finite producers cannot compete as
        to regulate themselves into productive-output (price-deflation per hour)
        efficiency
        <Cable
          onError={handleScollImgError}
          src={
            this.state.serviceCancelingImages
              ? ""
              : "https://drive.google.com/file/d/1MEOHPu0i7lFCB2DWGwZRZ87SErCXp5Dn/preview"
          }
          float="right"
          title="National Report - Housing market fluctuations with bob-sellers"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + 4]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        Slowing of the housing-cycle,” says Bob sellers about foreclosures and
        the mopping of down payments, amortize, don't cancel nor bailout.
        timelesspaydayroyalty scoped for industry-type in p2p for
        non-concurrentable&nbsp;
        <a href="https://vaults.biz">
          max-profit-royalty schedule for outlays upon withdrawal or sale
        </a>
        , keep investment bank collective bargaining in warehousing equity or
        fully-funding a collective-bargain without credit
        <br />
        <br />
        void ab initio, duress beyond mvp{/**tom king attorney amistad */}
        <br />
        incarceration net loss profit by bonds, regulate (open-source) don't
        racketeer (compete-with-consumers) means jailtime
        <Cable
          style={{
            height: "300px"
          }}
          onError={handleScollImgError}
          src={
            this.state.serviceCancelingImages
              ? ""
              : "https://drive.google.com/file/d/1JPM1NiA4osQ17-H-TUV7FsHIVTGjAd9a/preview"
          }
          float="left"
          title="Occupy Democrats - take my treatment before jury-verdict of 11/12 without prejudice of expertise"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + 3]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        <h2>expertise breed complacency and savefacing</h2>
        <Cable
          style={{
            height: "500px"
          }}
          onError={handleScollImgError}
          src={
            this.state.serviceCancelingImages
              ? ""
              : "https://drive.google.com/file/d/1szNRKdYpOQOtQMVDeleUVbai0pAxPo2E/preview"
          }
          float="right"
          title="Bernie and Sid - infinite producers, accounting and jury, bona fide and inclusive"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + 2]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        licensure to 50-50 raffle and&nbsp;
        <a href="https://truncatedsalestax.com">have advice be taken from</a>
        &nbsp;is rent-seeking, like
        fda-craft-beer/nih-r&d-monopsony/doe-trade-secrets/hung-jury-permits
        <br />
        We only benefit from charity when we are going to buy those turkies with
        that money anyway. Price elasticity is 1. Right?!
        <span
          role="img"
          aria-label="side-splitting-laughter hear-no-evil old-man"
        >
          🤣🙉👨🏻‍🦳
        </span>
        <h2>
          work off from "seller, loiter on collateral; gdp=debt/down==11/1, only
          expiring-insurance pool bid fraud can afford advertising
        </h2>
        <br />
        The corporate tax from matching turkeys actually taxes from consumers,
        if the shareholders are outlaid to join demand without withholdings,
        public nor private market-communes
        <br />
        <br />
        He doesn’t give up right to self defense because he was there. Do not
        mix laws or double jeopardy by countervailing laws (and therefore abject
        racketeering class precedence of the law-licensing-board, akin to fad
        craft-beer malintent reasons to close-source trade secrets in
        trust-building and competing with consumer educational institutions,
        public or private, in labor-dead-weight without exclusive demand
        autonomy, 60/40 being wall st/gov 40% debt spending $300k/year/person,
        10-40% bond laundering, debt-service, in fed-state, respectively
        <br />
        <br />
        duress isn't voluntary, random isn't when emulated, but voluntary
        <Cable
          onError={handleScollImgError}
          src={
            this.state.serviceCancelingImages
              ? ""
              : "https://drive.google.com/file/d/1JJmqGwKcojFamC_-Io5M11HFzsanf_LJ/preview"
          }
          float="right"
          title="Tucker Carlson fam"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + 5]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        <h1>politics between reason and law</h1>
        “‘I’m going to kill you if you enforce the illegal-law,’ might makes
        right is why civilization exists,” Tucker Carlson talking about reasons
        to jail without naturtal crime to Brian Kilmeade. Minnesota is guilty,
        comparative natural law means we must now carface Jamie Dimon for
        livlihood counterfeit in contract, pharma-monopsony and
        malfeasant-/countervailing-justice-and-precedence, open-carry without
        luggage is guilty, licensing without open-source is guilty, barriers to
        entry is guilty. register the gun, don't jail or fine when you come up
        against a detractor to your gerontocracy. "
        <a href="https://truncatedsalestax.com">
          when kyle took out this mental-patient
        </a>
        ," who 'raped 3 children' but served their time? nj says you are
        mental-patient if you are homeless after 10x hours and half unemployed
        to working age cohort size since 1970, then they lie about you saying
        you kick and punch after trying to elope after presenting you with a
        siringe, after going in for a knee problem, then believing my mother who
        just wanted me out of the house without evidence, 13 days, after being
        called bizarre for calling the diagnosing doctor's income a false pooled
        bid of expiring-insurance, while Paul Krugman runs free. Ask a murderer
        why they did it, it is never insanity. only 1/12 jury conviction is
        legally-crazy, until you have brainscan.info malformity-correlations. I
        own copyright, you retards are working against $821/day/person new debt.
        Cocaine and Weed is a performance enhancer, but pain-medication and
        antibiotics are currency-competition to the public-park dilution that is
        dollar-park-shares of 20% us fed lands
        <Cable
          style={{
            height: "500px"
          }}
          onError={handleScollImgError}
          src={
            this.state.serviceCancelingImages
              ? ""
              : "https://drive.google.com/file/d/1gQ6YJf6orTjfFQrL23l-AdhrYdSxce-v/preview"
          }
          float="left"
          title="National Report - GOP budget guy"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + 1]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        <h2>
          price-deflation per hours is sufficed by immigration or ending wall
          st, being 60% of debt-spending, which certainly IS price-elastic &
          -inelastic of bid-to-ask
        </h2>
        <h2>poorness=(poverty/equality)</h2>, best friends
        <h2>propensity of output</h2>, expiring-insurance collective bargaining
        oxymoron, false, fallacy
        <br />
        <br />
        excess deaths CAN be-standardized for cohort sizes to assign
        significance!" epiologists
        <br />
        <br />
        <b>
          Saver Party 202X, truncated sales tax, a flat tax's flat tax, free
          rider immutable sewage police lawsuits
        </b>
        : It is literally insignificant except for 20%x more than normal fed
        spending/yr free rider mutables, 40% debt spending, 10% debt service,
        .8$ debt for fed spend dollar-public-park (without share-split-accrual
        a.k.a. “strings), 1/4 pentagon, 1/14 pension, 1/4 premiums for
        monthly-savings, accosting the supply chain. Why not immigration
        working-age to sold your delirious supply-chain problem when c1970
        half-life .5x unemployed to population, 10x price/hours more hours for
        median home
        <TwitterTweetEmbed
          key="1434606169516032012"
          tweetId="1434606169516032012"
        />
        <a href="https://saverparty.xyz">#ThirdPartyBeneficiary</a>
        <br />
        <b>#CreditCounterfeitLaundering</b>&nbsp;#ReverseM2, #GreenNewDeal
        <br />
        <b>#FreeRiderMutables</b>&nbsp;Involuntary-servitude,
        #GovernmentGentrification, #SocialismIsParetoEfficient,
        #FiniteProducers, #RepublicansAreCommunists, #LibertariansAreGimps,
        #ConsortiumCommunism, #LocaleDepositaries, #DebtlessEconomy,
        #ZeroSpendingEconomy, #TradeNotSpending,
        #ReimburseDownPaymentsDuringBankruptcy, #DepositIsntAnOption,
        #BondVigilantes
        <br />
        <TwitterTweetEmbed
          key="1434603553176309764"
          tweetId="1434603553176309764"
        />
        <b>#CompetingWithConsumers</b>
        &nbsp;#CONFLICTOFINTERESTS#UNION#COMPARATIVEADVANTAGE, #GAMETHEORY,
        ##RolloverInsurance, #PrisonersDilemma, #RolloverCollectiveBargaining,
        #UselessPriceInelasticity,&nbsp;
        <a href="https://vaults.biz">#MillennialIncomeDeficit</a>,
        #M2Laundering,
        #ConflictOfInterests:#AbjectFailure-#BonaFideIntent+#PromotedWill,
        #ClassPrecedenceMalfeasance
        <br />
        <TwitterTweetEmbed
          key="1434602186160414727"
          tweetId="1434602186160414727"
        />
        @SaverParty
        <b>#VaccinesAreRacist</b>&nbsp;Involuntary-servitude, duress beyond
        incontrovertable, absent of reasonable doubt, consensus proir to
        conviction, permitting, or ordering of desistation{" "}
        <a href="https://froth.app/stats">#BasisRateFallacy</a>, #Epiology,
        #NullHypothesis, "not, not is necessary but not necessarily sufficient",
        when the basis matches the outcome, you must deduce all other causes to
        extrapolate a law.
        <br />
        <b>#FundSewagePolice</b>&nbsp;hung-jury beyond minimal viable product?
        &nbsp;
        <a href="https://www.rutgers.edu/news/rutgers-led-national-survey-uncovers-doctors-misconceptions-about-nicotine-risks">
          1/3 doctors believe smoking cause birth-defects
        </a>
        <br />
        <TwitterTweetEmbed
          key="1430159596417699842"
          tweetId="1430159596417699842"
        />
        <br />
        <b>#TruncatedSalesTax</b>&nbsp;3% under $2k max $60 geohash-spoofable
        <br />
        <b>#ImplausibleLandlordUse</b>&nbsp;30 days or 5 units
        <br />
        <TwitterTweetEmbed
          key="1421471623136358405"
          tweetId="1421471623136358405"
        />
        <br />
        This can only be solved with non-social government (photo & criminal)
        identity&nbsp;
        <a href="https://nationalsecuritycasino.com">@DeptofDefense</a>
        <br />
        <br />
        I mean having a physical payment authorization, with certificates on
        commodity sdr & 44x1 shmita
        <br />
        <br />
        <div
          style={{
            borderRadius: "10px",
            border: "1px solid rgb(100,200,255)",
            textAlign: "center"
          }}
        >
          {" "}
          44x cash, debt is now. Borrowers colluding with bankers, loitering on
          the assets and prohibiting their settled trade away from the youth -
          to which the youth are put into wageless labor at school, all paid by
          promising to each other what is not theirs. Now that this case is ...
          <br />
          <br />
          ... apparent, they will print unrequited to make up the difference
          <br />
          <br />
          <div
            style={{
              margin: "10px",
              borderRadius: "10px",
              border: "1px solid rgb(100,200,255)",
              textAlign: "center"
            }}
          >
            In the near future we will steward equity+royalty w/max-profit and
            reverse those purchases to all those affected by the manipulated
            least frugal supplier and demander by
            debt-counterfeit-in-contract-wagering monopsony of the consumer’s
            other marketable assets by prisoners’ dilemma duress coagulating and
            bloating demand beyond their willingness and ability in their
            individual propensity https://vaults.biz
          </div>
        </div>
        <br />
        Why work in cash when you can work to default on debt? Why is being
        driven to a mental health place once (was it not a hearing?) not
        congruent w only being able to commute once a month due to a
        jaggedly-torn vastus medialis that hasn’t healed as I was a bartender
        @SocialSecurity
        <br />
        <br />
        A bridge, a toll and a broadband network walk into free-rider-monopsony.
        @Apple Store is the bartender, & the header for webapps is the
        bootlegged-booze #infrastructure #InfrastructureBill #InfraWeek
        free-rider-immutables Police officer© sales-tax-geohash
        http://3under2.us @BrigadeAbe
        <br />
        <br />
        <TwitterTweetEmbed
          key="1434585366183522312"
          tweetId="1434585366183522312"
        />
        Margin target. Interesting how congruency is perpendicular for an
        exponential relationship. Hope http://mortality.org is ready for me to
        put life expectancy under death which could explain the season. Seems
        the medical community knew it would be a doozy @nih what u know? @who
        http://Humanharvest.info
        <br />
        <br />
        GDP is all m2, where does currencyComponentOfM1?
        <br />
        <br />A degree in economics taught at JHU is not factual, and medical
        papers are prone to act unlike the reasonable-doubt of “do-no-harm”
        <br />
        <br />
        Let alone are they interested in the wrong answer if it pays
        <br />
        <br />
        Or there is an improper treatment of doctors that abstain for this
        <br />
        <br />
        The government could have given $70k/yr to people every year with the
        amount of money they printed (red) and $300k promised (blue) but instead
        operated their trust-built monopsony
        https://fred.stlouisfed.org/graph/?g=D2jW
        <br />
        <br />
        peeky-blinders prior to conviction? I'll be using the deviceKeyBox &/or
        physicalKey w/ convicted homicides, rapes, counterfeits, racketeering &
        non-compliance @ftc loaded on a dashboard for police to interact w/
        1st-time cited plans of attack publicly forced onto @firebase
        https://vianickcarducci.medium.com/optimal-security-for-webapps-dd2a65c2418c
        <br />
        <br />
        should a http://vau.money atm fee charge in such a way on
        http://scopes.cc employee-management-auth-cards? and
        http://thumbprint.us marketplace? I can only prohibit taking
        credit-counterfeit by using ACH for transfer & ATM for banking...
        http://vaults.biz
        <br />
        <br />
        <div
          style={{
            borderRadius: "10px",
            backgroundColor: "rgb(100,200,255)",
            textAlign: "center",
            padding: "4px 0px"
          }}
          onClick={() =>
            this.setState({ openMinnesota: !this.state.openMinnesota })
          }
        >
          The Government is liable: deadly force, accidental death, of integral
          instigation; or sting, undercover warrant, who called it in? lie of
          reasoning?
        </div>
        {this.state.openMinnesota && <br />}
        {this.state.openMinnesota && (
          <div
            style={{
              borderRadius: "3px",
              border: "1px solid rgb(100,200,255)"
            }}
          >
            prone-control is not use of force, but should be used as
            active-resisting. ok. but you have the address of Floyd right? let
            him go #MinnesotaIsGuilty #ChauvinTrial
            <br />
            <br />
            People on drugs might not understand, irratic-behavior, not feel
            pain, super-human, compliant-to-complete-non-compliance in a
            heartbeat
            <br />
            <br />
            Compliance, force, duress, intent to harm is not competing with
            customers or unequal law like '"lawful escalation" of an unequal
            punishment of infraction.' Do you like it
            <br />
            <br />
            Causes lymphoma; more significant than graft vs humoral response to
            D416G @CDCgov @NIH
            <br />
            <br />
            Free rider religion of self on civil rights act let alone exclusion
            @HealthNYGov @RutgersU @JohnsHopkins
            <br />
            <br />
            What proof is not due to mask humidity mold elongating gestation of
            virus without human cell and rather virus not going up to atmosphere
            or ceiling in condensation; can we have a study of
            countertop-talking? @JohnsHopkinsSPH
            <br />
            <br />
            Non-malignant lymphadenopathy is diagnosed by “history and physical
            examination” Unexplained Lymphadenopathy: Evaluation and
            Differential Diagnosis Lymphadenopathy is benign and self-limited in
            most patients. Etiologies include malignancy, infection, and
            autoimmune disorders, as well as medications and iatrogenic causes.
            The history and physical... aafp.org
            <br />
            <br />
            The mRNA grafts aren’t saving lives, deaths are exponentially
            correlated with age @fda https://aafp.org/afp/2002/1201/p2103.html
            you ran out of vulnerable old people, now the malignant
            over-production of b-cells will occur Lymphadenopathy and Malignancy
            The majority of patients presenting with peripheral lymphadenopathy
            have easily identifiable causes that are benign or self-limited.
            Among primary care patients presenting with lymphadenopathy, the...
            aafp.org
            <br />
            <br />
            “Wartime effort” is fraud like gold confiscation in 1932. @ftc @fcc
            @TheJusticeDept duress religion of self. Hesitancy is not your
            choice and you certainly cannot mislead
          </div>
        )}
        <br />
        “Don’t pay thousands in car bills,” where do you think you get the
        money?
        <br />
        <br />
        Lawful run of red-light, don't you have a snap of the license?
        <br />
        <br />
        You can't crash into them if they continue driving at the speed limit
        after knowingly running a red light
        <br />
        <br />
        Light to moderate pressure during handcuffs is policy? For counterfeit?
        Let me show credit history of US gov
        <br />
        <br />
        The police are guilty for positionary-aphyxia force in handcuffs may be
        a scapegoat... I want the original arrest for counterfeit, even
        knowingly, to be deemed illegal given the Minn Police operate on
        counterfeit as of now. Hope they realize what this solidifies for
        comparative rights in enforcing counterfeit if they can use
        low-to-moderate positionary-asphyxia force, not even possible with knee
        except with handcuffs...&nbsp;
        <a href="https://www.fletc.gov/sites/default/files/imported_files/training/programs/legal-division/downloads-articles-and-faqs/research-by-subject/4th-amendment/ConsenttoEnterorSearchbyDeception.pdf">
          malfeasance in foresight & monopsony-by-credit for their
          free-rider-immutable brandishing that keeps us all safe
        </a>
        ! ....
        <br />
        <br />
        Bloat prices for their input costs? Launder profits of their business to
        the bank? That isn’t owning a home! The creditor gets to repossess and
        keep community down payments
        <br />
        <br />
        Benefit/cost on what grounds? One person’s lifeline? Stop conflating
        vectors
        <br />
        <br />
        Many factors than cannot be added together in algebra/calculus, they are
        different units: blood clot loaned to Canada, they owe us the impossibly
        returned price-fixed at that price damages? This wouldn’t happen if a
        commodity sdr was lost in the utility of that single vector without
        cross-party-harm B-cell oncogenesis to boot, for a monoclonal antibody
        that is learned (where mRNA does/is not, taught-by-doing) over thousands
        of Antigens. What is the DNA structure you are testing for in the PCR
        cultures?
        <br />
        <br />
        "So let me get this straight: Pubs in Congress claim spending billions
        on F-35s creates jobs, but spending on rebuilding roads and bridges
        doesn't" - Robert Reich
        <br />
        <br />
        It takes jobs from others! You can use monopsony-margin-targeting and
        free-rider-mutability in tolls too. It doesn’t create jobs
        <br />
        <br />
        <div
          style={{
            borderRadius: "10px",
            backgroundColor: "rgb(100,200,255)",
            textAlign: "center",
            padding: "4px 0px"
          }}
          onClick={() => this.setState({ openChase: !this.state.openChase })}
        >
          Chase
        </div>
        {this.state.openChase && <br />}
        {this.state.openChase && (
          <div
            style={{
              borderRadius: "3px",
              border: "1px solid rgb(100,200,255)"
            }}
          >
            @ChaseSupport We are the official Twitter customer service team for
            Chase Bank! We are here to listen, learn and help M-F 7AM-11PM ET &
            Sat/Sun 10AM-7PM ET. 10.4K Following 135.9K Followers Joined March
            2011 Quote Tweet Chase Support @ChaseSupport · Apr 11
            <br />
            <br />
            Replying to @SaverParty Hello. We see you mentioned us, and wanted
            to make sure you didn't need assistance. If you do, feel free to
            send us a DM. ^BW
            https://twitter.com/messages/compose?recipient_id=274789264 My name
            is Nicholas Carducci, I had drafted a longer message but must have
            swiped it off and am now too tired to rewrite my whole argument. I
            would surely like to get your intentions with there being $70k/yr
            new cash per person and $300k/yr new promises on that cash, per
            person. You obviously do not intend to get the return you take from
            the lot. (1) Is that not colonialism and therefore slavery,
            promising other peoples’ money to yourselves and therefore
            counterfeit? Please understand all purchases will be reversed to
            their cash:debt level, now 44:1 and any furtherance to bail out
            lenders by currencyComponentOfM1 residual split as not in accordance
            with normal shares, and the disparage is violation of Amendment 14,
            13 the Sherman Act and many common law regarding consent. (2) Where
            does the currencyComponentOfM1 go? Sun 11:46 AM Hi! A specialist
            will help you as soon as possible. Do NOT send confidential info,
            such as SSN, credit card, or account numbers over social media. For
            account-related questions, please send your name, ZIP and details of
            your concern. Thanks for choosing Chase. Sun 11:46 AM
            <br />
            <br />
            This is duress and comparative law, not a choice I borrowed without
            the intention to pay it back, since everyone else impossibly was Sun
            11:48 AM
            <br />
            <br />
            In the near future we will steward equity+royalty w/max-profit and
            reverse those purchases to all those affected by the manipulated
            least frugal supplier and demander by
            debt-counterfeit-in-contract-wagering monopsony of the consumer’s
            other marketable assets by prisoners’ dilemma duress coagulating and
            bloating demand beyond their willingness and ability in their
            individual propensity Sun 11:51 AM
            <br />
            <br />
            I will not be giving any future income back because the whole
            premise is illegal, only under a profit schedule of customers
            willing and ability without prisoner’s dilemma duress and under
            their own capacity is it legal for supply to gain from a person, to
            which http://vaults.biz shows the protocol how to be in compliance
            with US and International law Sun 11:58 AM
            <br />
            <br />
            I will be bringing this class action suit to reverse purchases (or
            income) to their cash:debt levels and not allow any accrual-promise
            or actual dollar split to recoup for your bad bet that you must know
            there is not enough money, unrequited and residually/fractionally,
            if I had the money. Please answer as to what your intentions are
            offering me to pay 25% of my borrowing. Duress is voidable as
            consent to I don’t understand if your strategy to just live it up
            with your collusion with government and never break even? Sun 12:05
            PM
            <br />
            <br />
            To loiter with consumers’ marketable assets by way of the
            price-intervention of prisoners’ dilemma duress,
            counterfeit-promises and the duress to collude as a borrower on
            assets against savers therein and not ownership? Sun 12:09 PM
            <br />
            <br />
            Personal credit is not logically possible and royalty-w/max-profit
            will not be as generous of outstanding to book-asset value without
            the government malfeasance and outright monopsonic collusion beyond
            their free-rider-immutable abilities as to be legally compliant but
            to expand their purchases to not only while indebted but further
            split savers and keep the assets under the monopsony of the
            borrower. Sun 12:13 PM
            <br />
            <br />
            Collateralized-credit is like a deposit, not an option where the
            price is locked in. That means repossession comes with a return of
            the down-payments to the supply chain you monopsonized Time-based
            business credit is also a method to launder money before demand is
            really ready willing and able to of their own consent Please follow
            http://vaults.biz for my tech solution and consider the geohash
            protocol for sales tax software to pick up and ween off slavery For
            free-rider-immutable Gov services like their margin-targeting duty
            on networks and markets of ‘markets’
            <br />
          </div>
        )}
        <br />
        Lending, buying to rent with unsettled trade and unrequited-split is not
        help, it is cannibalism
        <br />
        <br />
        Why default or go to war? COVID-19 mRNA Vaccination-Induced
        Lymphadenopathy humanharvest.info
        <br />
        <br />
        Growth for @JoanHamburgShow is if people die and she has to share less
        <br />
        <br />
        Usually they find an excuse to print from “public credit” to private
        debts
        <br />
        <br />
        Business is the key to non-profit efficiency, as if profits are income
        over spending, of as discretionary-income are revenue over expenditures,
        and efficiency is investment (asset, profit-share accumulation, not
        lending or building with the intent to rent) over wages moldmask.co,
        cocaine is money, purity health dpt @SaverParty
        <br />
        <br />
        Investment must be channeled from willing, able and ready customers,
        free-rider-mutable market, immutable https://3under2.us
        <br />
        <br />
        <div>
          <a
            href="https://scopes.cc"
            style={{
              fontSize: "30px",
              display: "flex",
              flexDirection: "column",
              position: "relative",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "76px",
              backgroundColor: "#c39767ff",
              color: "white"
            }}
          >
            Scopebook
            <br />
            <span>scopes.cc accrual-zero</span>
          </a>
        </div>
        <br />
        Scott, Tax Foundation: "10% Union Workforce by Federal Discrimination"
        when unions are not just strikes
        <br />
        <br />
        Everyone is at commercial, but one has to be bullshiting for compliance
        at :20, :35 and :52
        <br /> <br />
        The point in which&nbsp;
        <a href="https://www.tradingtechnologies.com/xtrader-help/x-study/technical-indicator-definitions/volume-on-the-bid-and-ask-bavol/">
          supply and demand meet
        </a>
        &nbsp;is the price in which the LEAST frugal, price-giving supplier
        meets the LEAST frugal, price taking demand, and thereby trades to paint
        the last trade valuation&nbsp;
        <a href="https://humanharvest.info">mirrorcode</a>
        <br /> <br />
        this is colonialism, this is counterfeit; cannibalism not dominance or
        profits/assets to institutions/labor
        <br />
        <br />
        government monopsony
        <br />
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <div
            style={{
              minWidth: "120px",
              width: "25%",
              position: "relative"
            }}
          >
            <img
              alt=""
              style={{
                width: "100%",
                height: "auto"
              }}
              src="https://www.dl.dropboxusercontent.com/s/9un3448wjl1dnip/IMG_3563.png?dl=0"
            />
          </div>
          <div
            style={{
              minWidth: "120px",
              width: "25%",
              position: "relative"
            }}
          >
            <img
              alt=""
              style={{
                width: "100%",
                height: "auto"
              }}
              src="https://www.dl.dropboxusercontent.com/s/h03iyt7e8hxa19w/IMG_3562.png?dl=0"
            />
          </div>
          <div
            style={{
              minWidth: "120px",
              width: "25%",
              position: "relative"
            }}
          >
            <img
              alt=""
              style={{
                width: "100%",
                height: "auto"
              }}
              src="https://www.dl.dropboxusercontent.com/s/esz6ke2xn7fs716/Markey1.png?dl=0"
            />
          </div>
          <div
            style={{
              minWidth: "120px",
              width: "25%",
              position: "relative"
            }}
          >
            <img
              alt=""
              style={{
                width: "100%",
                height: "auto"
              }}
              src="https://www.dl.dropboxusercontent.com/s/xjhg8b1kcmwxpxz/Markey2.png?dl=0"
            />
          </div>
        </div>{" "}
        <br />
        <b style={{ color: "blue" }}>
          I’m a laborer and pre-rev inventor, I will be suing for damages and
          unequal law;
          <br />
          there are plenty of counts, Sherman Act, Amendment 14, 13,
          counterfeit-wagering prohibiting trade settlements...
        </b>
        <br />
        <br />
        We all have to make a living (read:cannibal), but we all don't have to
        produce by front-running and than dumber-fooling consumers. and these
        direct deposits are involuntary split that you get 9% of
        <br />
        <br />
        <div
          style={{
            borderRadius: "10px",
            margin: "10px",
            padding: "10px",
            border: "1px solid grey"
          }}
        >
          Harder for GA absentee & early-voting somehow from runoff... it makes
          it easier for most! we can use internet no more political parties
          <br />
          <br />
          80% infrastructure investment support, did you specify if by debt or
          tax? What is the n size? @PressSec
          <br />
          <br />
          “Competitive-bidding process” is abjectly untrue to describe your
          monopsony proposal. You can force network companies to pay because
          they are a market-of-markets
          <br />
          <br />
          If you are to act in between a consumer-subcontractor, as contractor,
          you should be flipping-assets or pro-rated-for-escrow-on @scopeboo
          http://scopes.cc labor/material auto-unlock-per-sprint-payment
          <br />
          <br />
          Jen Psaki about to admit her preferential treatment of “American
          workers and our economy” over savers and labor @PressSec
          <br />
          <br />
          Do not volunteer Cowards Starve - Protomartyr open.spotify.com
          <br />
          <br />
          Extending the deadline was not in the consumer credit contract, Jen.
          You lose moldmask.co, cocaine is money, purity health dpt
          <br />
          <br />
          I obey if I am sick, but get the “vaccine”/graft to please you @cnn
          won’t even say your doctor’s name @BrookeBaldwin
          <br />
          <br />
          You can see how good #cocaine is by looking at these three charts, you
          don't need a @MoodysInvSvc rating or @GeraldoRivera report
          https://drugabuse.gov/publications/teaching-addiction-science/brain-actions-cocaine-opioids-marijuana
          #Marijuanastocks
          <br />
          <br />
          https://ncbi.nlm.nih.gov/pmc/articles/PMC3165962/ #MinnesotaIsGuilty
          #ChauvinTrial #cocaina #cocainewhite
          <br />
          <br />
          Meth x fetanol = Hypoxaemia, oxygen deficiency [relative-to carbon
          dioxide. no narcan when no cardio Dr. Bradford Langford (called:
          "non-responsive, no-pulse on-arrival")
          https://pubmed.ncbi.nlm.nih.gov/23636734/ Ph low during cardiac
          arrest, no blood flow
          https://ncbi.nlm.nih.gov/pmc/articles/PMC3208791/ striatal hypoxia The
          effects of opioids on the lung - PubMed The term opioid refers to a
          broad class of medications that are used most frequently for their
          analgesic effects. Along with this effect, they also produce euphoria,
          and it is for this reason that... pubmed.ncbi.nlm.nih.gov
          <br />
          <br />
          (oxygen) to tissues: pi, lactate Co2, high, uh, varies, blood/gas not
          cause of one offer the other in edi arrest. High co2 suggest
          respiratory cause by drug, suffocation or both
          https://erj.ersjournals.com/content/44/4/1023 reports of
          in-conjunction for po-po: top of citations are tenants; its slavery
          Gas exchange and ventilation–perfusion relationships in the lung A
          review of ventilation–perfusion relationships and gas exchange, basic
          concepts and their relation to clinical cases http://ow.ly/wMUwq
          erj.ersjournals.com
          <br />
          <br />
          If the @ftc can make it the liability of the merchant for fault of
          disbursements prior to notification, their application of
          residual-split ('86-benefits) is as well @ssa your onus is to ensure
          that I am who I say I am regardless of how you don't
          regen-private-keys or photo-ID
          <br />
          <br />
          What is the difference between an unsettled-obligation &&
          prisoners’-dilemma-duress and slavery?
          <br />
          <br />
          Only pay for what you need. An abject lie @LibertyMutual unless you
          are admitting to intending to harm by subjecting Demand to
          cross-party-bloat && price-variable-gift-cards @77WABCradio
          <br />
          <br />
          What is the difference between an unsettled-obligation &&
          prisoners’-dilemma-duress and slavery?
          <br />
          <br />
          But a Constitution of Government once changed from Freedom, can never
          be restored. Liberty, once lost, is lost forever.
          <br />
          <br />
          Somebody report me! Donald already incriminated for nothing
          <br />
          <br />
          Chris Hahn @ChristopherHahn It’s a tantrum not a boycott.
          <br />
          <br />
          The Former Guy will never be welcome at Yankee Stadium or anywhere
          else in New York.
          <br />
          <br />
          Replying to @ChristopherHahn Push him out to sea
          <br />
          <br />
          I had a word with lit- prefix that really narrowed it down but then a
          guy on the radio said DUI of weed or cocaine makes sense
          <br />
          <br />
          Producers say to rentier you are not one of us, we compete with
          eachother for customers, we don’t take the land or air above it to not
          use it or flip and settle or supply is not practically constrained to
          charge rent (if copyright is not too broad, but well-managed...)
          <br />
          <br />
          Invoices are theft Max five rent 3 under 2 Reverse purchases to
          cash:debt
          <br />
          <br />
          Colluding to make prices higher with father time && the intent to harm
          (not use) are what make rent illegal
          <br />
          <br />
          This is not a subscription to a service that doesn’t harm others (if
          non-compete monopsony, the subscription does harm with involuntary
          trade)
          <br />
          <br />A competable-subscription service is not
          bloating-demand-with-prisoners-dilemma or
          assigning-impossible-usurped-unrequited-invoices
        </div>
        <br />
        Cases are rising, deaths are less lethal because the vulnerable are
        already dead and there are testing what already existed since 1900 cold
        make same antibodies but only work if robotic platform
        <hr />
        <br />
        <hr />
        <br />
        <hr />
        <div style={{ backgroundColor: "rgb(200,220,255)" }}>
          "5 Bipartisan Covid Relief Plans, no Covid Health Spending which would
          be to help small businesses and family workers," 9%. Ben Furgeson says
          9% "Goes to you." You guys suck! Not liable for the products you
          advertise, huh, M. levin
          <br />
          <br />
          Liberty Mutual: "You only pay for what you need." &nbsp;
          <a href="https://www.investopedia.com/articles/investing/110513/utilizing-prisoners-dilemma-business-and-economy.asp">
            YOU DONT NEED IT
          </a>
          . &nbsp;
          <a href="https://nmlsconsumeraccess.org/">Consumer Access</a>
          &nbsp;costs access, by its being to greater effect AND absolutely of
          relative savings...&nbsp;
          <a href="https://www.investopedia.com/articles/investing/110513/utilizing-prisoners-dilemma-business-and-economy.asp">
            doing it is a waste of time and equityutilitymoney
          </a>
          <br />
          <br />
          “Special financial assistance,” would be to help negotiate original
          principle without credit found market marginal utility:cost price, not
          favor the lender or overreaching landlord
          <br />
          <br />
          The key to world peace is no finance. Not mental health services by
          the hand of state sanctioned, paid, conflictedly-interested experts
          <br />
          <br />
          "Help is on the way with your finances" - Wold Blitzer
          <br />
          you are taking equitymoney, splitting it as you would corporate
          shares, and giving them back less and of increased demand capacity for
          price:utility (no reason, not help, only helps the ask to get
          more&nbsp;
          <a href="https://foiegras.life">for the same thing</a>)
          <br />
          <a href="https://open.spotify.com/track/0KeDuUqEX3P0cKzRD5pEom?si=i8hSI_NeQtuCwpt9x34p6w">
            not taking credit
          </a>
          , striving to work for market(copyright, not{" "}
          <a href="https://vaults.biz">depositary</a>) share instead of
          entrapping myself into <a href="https://stripe.com">Stripe.com</a>
          <br />
          <br />
          Judges cannot judge what is right for bail, they'rn't impartial - as
          in they get the bail.
          <br />
          Bail for judges'n't for consumers/
          <a href="https://wavv.art/United_States_of_America">community</a>
          &nbsp;- the service at its most efficient as to keep everyone
          happiest, individually, for the complainants only; class action is for
          precedence, but we all assume it gets less than each individual case
          would.
          <br />
          <br />
          Allpoint and Greendot (Shazam/Gallileo/Dwolla&nbsp;
          <a href="https://nationalsecuritycasino.com">only US</a>) oligopoly
          prevents me from extending payable services because it requires me to
          take counterfeit offers with cross-party down-payment
          malfeasant-jurisprudence risk in requiring that I accept credit to
          accept debit, and banks that cost $10/mo instead of ATM networks
          <br />
          <a href="https://www.academia.edu/43983364/Review_Capitalism_in_the_21st_Century">
            CountyReimbursementsAcrossTheCountry
          </a>
          , that's my equitymoney, dike
          <br />
          <div style={{ display: "flex" }}>
            <div
              style={{
                width: "40%",
                position: "relative"
              }}
            >
              <img
                alt=""
                style={{
                  width: "100%",
                  height: "auto"
                }}
                src="https://www.dl.dropboxusercontent.com/s/alxtqu19s764stl/CountyReimbursements.jpeg?dl=0"
              />
            </div>{" "}
            <div
              style={{
                width: "40%",
                position: "relative"
              }}
            >
              <img
                alt=""
                style={{
                  width: "100%",
                  height: "auto"
                }}
                src="https://www.dl.dropboxusercontent.com/s/nnv1d4217tjix7b/IMG_0318.jpeg?dl=0"
              />
            </div>
          </div>
          <br />
          This fat talks about equity and then says thanks to Biden for
          providing funds. Funding doesn't help, it only monopsonizes above the
          ask. Not only is it fraud by PCR antibody the "
          <a href="https://humanharvest.info">gold</a>&nbsp;standard" but false
          positive as is for cold's response, the policy was forced upon us in
          1937
          <br />
          <br />
          Border Patrol agents are saying 50-100% have wristbands to show how
          much pootang they owe the cartels on the way up. &nbsp;
          <a href="https://en.wikipedia.org/wiki/Janet_Yellen">
            STOP THE SPIGGETS
          </a>
          <br />
          <br />
          <br />
          What is with the media today reminding us that the vaccine has already
          been approved and the bills are finalized? We could take all your
          money and give it to Greta Thunberg The only path forward is the
          Efficiency Act and debt:cash reconciliation for all purchases to which
          the LEAST frugal price-giving ask and price-taking person found
          price*output(or individual-efficiency, comparative-advantage
          productivity)
          <br />
          <br />
          STOP ASKING FOR CAPACITY WHEN YOU MEAN&nbsp;
          <a href="https://www.academia.edu/43983364/Review_Capitalism_in_the_21st_Century">
            DEMAND CAPACITY
          </a>
          &nbsp;WHICH IS&nbsp;
          <a href="https://saverparty.xyz">
            PERFECTLY PRICE ELASTIC FOR ITS UTILITY PER EACH NEW CAPACITY
          </a>
          , WE NEED&nbsp;
          <a href="https://www.tradingtechnologies.com/xtrader-help/x-study/technical-indicator-definitions/volume-on-the-bid-and-ask-bavol/">
            SUPPLY CAPACITY
          </a>
          &nbsp;OR VOLUNTEER OR LESS FRUGAL PRODUCERS, NOT STEAL BY
          COUNTERFEIT-IN-CONTRACT
          <br />
          <div
            style={{
              width: "40%",
              position: "relative"
            }}
          >
            <img
              alt=""
              style={{
                width: "100%",
                height: "auto"
              }}
              src="https://www.dl.dropboxusercontent.com/s/fohi9a6fxtrch0q/NeedFundsImmediately.jpeg?dl=0"
            />
          </div>{" "}
          <br />
          "Need funds immediately." NO YOU DON'T you need to adjunicate finance,
          insurance-by-duress, rentier-colonism & involuntary trade now
          <br />
          <br />
          "Leverage things" of donors or settled-market price, not equity.
          That's illegal. It is not a matter of time. Naturally debt:cash is
          1:1depositary in 1908, now is 41:1
        </div>
        <Cable
          style={{ width: "100%", height: "560px" }}
          onError={handleScollImgError}
          src={
            this.state.serviceCancelingImages
              ? ""
              : `https://fred.stlouisfed.org/graph/graph-landing.php?g=J6zW&width=670&height=475`
          }
          float="right"
          title="https://fred.stlouisfed.org/graph/?g=J6zW"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + 15]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        <br />
        <a
          href="https://saverparty.xyz"
          style={{
            position: "relative"
          }}
        >
          <img
            style={{ width: "90%", maxWidth: "800px" }}
            src="https://www.dl.dropboxusercontent.com/s/ohyyc9wensqjmar/interest%20dead%20weight%20%282%29.png?dl=0"
            alt="interest dead-weight by equity-bid supply and demand"
          />
        </a>
        <br />
        <br />
        People are dying; my _ considers death
        <br />
        <span>
          Your debts are mine if I buy from you, and that money you promised is
          not yours to promise.&nbsp;&nbsp;
          <b>
            How can I get us out of debt when there is $82t:$7t [actually&nbsp;
            <a href="https://fred.stlouisfed.org/series/CURRSL">
              currencyComponentOfM1
            </a>
            &nbsp;is $2t of $7t, $5t is&nbsp;
            <a href="https://fred.stlouisfed.org/series/M1SL">
              M1 savings valuation
            </a>
            &nbsp;, M2 is&nbsp;
            <a href="https://fred.stlouisfed.org/series/M1SL">$19t</a>&nbsp;is
            valuation of last traded savings accounts as well, or $7t when "
            <a href="https://fred.stlouisfed.org/series/M2REAL">deflated</a>
            &nbsp;with cpi" which doesn't include the greatest inflation in
            housing nor in price-inelasticity of $82/$2t (4100% vs 102%)]
            <br />
            2021
          </b>
        </span>
        <br />
        <h1>Micro-Theory</h1>
        <h2>Platitudes</h2>
        <br />
        <div style={{ display: "block", flexDirection: "column" }}>
          Only if you are [ "late on your business-line{" "}
          <span
            style={{
              textDecoration: "line-through"
            }}
          >
            or collateralized debt
          </span>
          , and the lender tacks on more than they estimated they would need to
          take on this risk forever (depreciation-no-give-backsies)", "scalping
          markets with no utility in assets or cash"] are you usurping a
          time-based payout schedule or trade
          <br />
          Productivity as measured by gdp is incorrect since it is mostly debt
          by evidence of v1 being derived from a gdp number of m2*v2.
          Productivity should be measured by benefit to cost, which cannot be
          encapsulated by a benefit that is a cost
          <br />
          They are colluding with finance (11x wealth only 2% of population)
          giving it to people who have debt to bail out $82t of usurped debt
          cornering assets by promising other people's money which is only $6t,
          they do not want to adjudicate, they just want to split dollar-equity
          without consent
          <br />
          If insurance companies are a net loss because they pay invoices
          instead of rollover gift certificates, can ALL insurance companies
          keep saying they save people money if the part that they can never say
          in unison is that they save people money only relatively??
          <br />
          <b>
            <i>We still live in colonialism </i>
          </b>
          <br />
          <i>at each market-level </i>
        </div>
        <br />
        <span>
          <b>
            <i>Regulators can only </i>
          </b>
          certify because they have been wrong before about tobacco and methane
          fires in crowded theatres are invisible
        </span>
        <span>
          <b>
            <i>national security is</i>
          </b>{" "}
          really bondholder security, we would do better after emancipation and
          no more slavery. insurrection against slaveowners is ok
        </span>
        time is a snapshot of facts, facts don't change from time but by
        voluntary trade or else it breaks A13
        <br />
        voluntary by no duress or alterior uneccesary, hidden or unknowable harm
        or by literally people colluding together about your money being theirs
        and they reap the benefits of using the collateral now... which is all
        that matters and the money the seller gets and is now instilling a cost
        only they can pay in full and more from another saver in the borrowers'
        customers
        <span>
          <b>
            borrowing with my money itelf as a lender or assuming it as a
            consumer is counterfeit not of copyright which should never be
            patent by mafia pay-off but of not your property to wager, your
            payment scedule collusion with seller, lender and borrower assumes
            you'll get my market-share, which should be vault-share, which is
            all currency really is. a gift certificates that rollover at the
            depreciation of the item in storage
          </b>
          , I now have to wait for you to get the money back from the lender or
          seller before I can get the depreciated asset
        </span>
        <br />
        <span>
          <b>
            <i>GDP is </i>
          </b>
          debt by a fabricated v1 from gdp/m1 where gdp from m2v2
        </span>
        <br />
        <span>
          <b>
            <i>Rent is </i>
          </b>
          the prohibition of trade thru which to benefit from more than how much
          they could possibly benefit in reality by owning the place, and not
          trespassing at one time ({">"}1mo) (1/5)
        </span>
        <br />
        <span>
          <b>
            <i>
              Debt, invoices & insurance brokering gift cards & expiring gift
              certificates are{" "}
            </i>
          </b>
          to price-fix & monopolize the Demand curve & leverage other peoples'
          autonomy in principal & interest, or the sellers' equity in principal
          & other peoples' autonomy in interest
        </span>
        <br />
        <span>
          <b>
            <i>Tax is </i>
          </b>
          theft by not being paid by those using services that cannot be a la
          carte (voluntary)
        </span>
        <br />
        <span>
          <b>
            <i>Slavery is </i>
          </b>
          an impossible contract, theft or indentured servitude that which is
          not able to work out of without others' benefits at your disposal
        </span>
        <br />
        <span>
          <b>
            <i>Lending is </i>
          </b>
          a conspiracy to price-fix and corner assets with a borrower using
          someone else's money as a valuation metric
        </span>
        <br />
        <a
          href="https://Vaults.biz"
          style={{
            fontSize: "30px",
            display: "flex",
            position: "relative",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "76px",
            backgroundColor: "rgb(20,20,25)",
            color: "rgb(200,200,220)"
          }}
        >
          Vaults.biz
        </a>
        <br />
        <span>
          or be able to pay but{" "}
          <b>
            not get paid due to preferences; or receive services due to
            impairment, only under duress or by your own interpretation of their
            benefit and cost
          </b>
          <br />- government or business may only certify advice to a standard
          unless your actions affect another by disclusion, duress or opinion of
          their actions or opinions. Not sharing health data or getting tagged
          with a graft to be included precludes any right to stop people from
          doing anything based on health, preference or bodily composition
          unless it is apparent, symptomatic or unanimously deduced
          <br />
          <b>
            you have to prove that what I believe is not true to make me stop
            saying it and I would have to prove something to make you have to
            repair the situation within your means
          </b>
          as long as it is not If they know this they should be able to find the
          attendees beforehand. Sounds like a con. Stop selling bonds/promising
          savers’ money at 11x more than we have to enemies for price-fixed
          cornering of assets please. bio on each guy and put them on the parole
          intranet
          <br />
          <div
            style={{
              border: "1px solid",
              margin: "10px"
            }}
          >
            A derivative cannot be a constant since apples are not oranges of
            differing, but the same units. #calculus Integral function is how
            constants observed (never adequate, random is as random does)
            predict future occurrences (which can be endless). #firstamendment
            Methane fires in a crowded theatre like debt or a percolating
            insurance-abetting invoice bill now you charge your customers rather
            when they choose you and you don't corner assets with your lender by
            not giving any utility but using a bug{" "}
            {`(()=>{servitude:()=>capturing saver’s money + either (a) being a government employee + this(); or (b)(1) LENDER pay BORROWER, (2) BORROWER pay LENDER 14%APR or this()})`}
            , can cause invisible or misunderstood harm as is lying or trusting
            that gov-sanctioned tobacco is healthy. Inclusion is an issue of A13
            & A14 to give but not take, not A1; discovery of what we can garner
            as facts from comprehensive data and viewpoints discussing with an
            intent to settle and without malintent or usurping other's rights is
            an issue of A1 #criminallaw #criminalintent #intention
            #whitecollarcrime #finance #consumerlaw #accounting
            #securitieslitigation #securitiesregulation #nationalsecurity of
            secession is not of foreign bond-holder aid and comfort
          </div>
          <br />
          <b>
            A1 is only for laws, well then you can turn people away from your
            business based on arousal-orientation?
          </b>{" "}
          Freedom of orientation is protected by A14 and Civil Rights Act, also
          A13 if you do not want to instigate slavery of allowing them to give
          but not take in the economy. Especially if there are few providers or
          you want to be protected from what people say
          <br />
          <b>privacy is required for free expression</b> Freedom of
          arousal-orientation, whatever makes you happy is protected by A14 and
          Civil Rights Act, also A13 if you do not want to instigate slavery of
          allowing them to give but not take in the economy.
          <br />
          <div
            style={{
              border: "1px solid",
              margin: "10px"
            }}
          >
            <b>
              supreme court saying nazi could walk chicago <i>is wrong</i>
            </b>{" "}
            because there is probable-evidence-of-evidence of motive to do them
            harm physically or financially (not valuation but tangible losses)
            neighborhood law is like the sea law but between homes, that's why
            open-carry is also an exhibited threat
          </div>
        </span>
        <span>
          or earning other people’s money (debt is the only bet that you can
          wager someone else’s money)
        </span>
        <br />
        <h2>Strategy-Comparison to Macroeconomics</h2>
        <br />
        <span>
          <b>
            <i>Analysis by logic of markets-at-scale, </i>
          </b>
          not numbers by bets beyond escrow & involving others' marginal
          benefits or utility expended as cost
        </span>
        <br />
        <h2>Alternative Investing Models</h2>
        <br />
        <span>
          <b>
            <i>Customer borrowing, at a fixed- or max-profit price, </i>
          </b>
          although is not promising money that isn’t theirs like in interest or
          time, it is price-fixing as a business can wait for customers to
          deliver return, while an individual will have to charge their patrons
          to have enough to buy food, health & shelter & the partner (really
          colonizer in this situation)
          {/**
        (1) due to adding no competitor to raise quality of
        life, just price, whose effect without benefit competitively is still
        passing the burden on their customers,, (3) Prohibits
        other people from trading the settled price not as a partnership to make
        a product better at a settled price, but a customer max-profit royalty
        if there is the ability to
        foreclose it is not settled (2)
        */}
        </span>
        <a
          href="https://NationalSecurityCasino.com"
          style={{
            fontSize: "30px",
            display: "flex",
            position: "relative",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "76px",
            backgroundColor: "white",
            color: "black"
          }}
        >
          NationalSecurityCasino.com
        </a>
        <a
          href="https://SaverParty.xyz"
          style={{
            fontSize: "30px",
            display: "flex",
            position: "relative",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "76px",
            backgroundColor: "#a64d79ff",
            color: "rgb(230,230,230)"
          }}
        >
          SaverParty.xyz
        </a>
        <a
          href="https://Froth.app"
          style={{
            fontSize: "30px",
            display: "flex",
            position: "relative",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "76px",
            backgroundColor: "#04060aff",
            color: "#edeac1ef"
          }}
        >
          Froth.app
        </a>
        <span>
          <br />
          <b>
            <i>
              Wealth is your assets relative to demand need, which may be as
              valuable as toilet paper or colonialism{" "}
            </i>
          </b>
          <b>
            If the government is giving aid and comfort to China by way of
            instigating savers into involuntary servitude and having the
            market’s assets cornered by no utility gained just price-fixing
            imagination of a resolution of this infinite promise{" "}
            {`(()=>{servitude:()=>capturing saver’s money + either (a) being a government employee + this(); or (b)(1) LENDER pay BORROWER, (2) BORROWER pay LENDER 14%APR or this()})()`}
          </b>{" "}
          <br />
          price-fixing is when you place the ask and the bid by oligopoly or
          otherwise... what, you are only cooperating when you have a funny
          name?
          <br /> in the name of · ·
          <br />
          promising more than you can pay; insurance that doesn't rollover (not
          subs because they promise no more than what you use/ do not give more
          to others in the pool or their customers or tort prosecutors) or is
          unsettled by invoice to buy is counterfeit
          <br />
          of reality and facts right now in the ground the assumptions of
          other's for future and past only exist in the claimant's head
          <br /> Lettin people profit from bugs being used rather than useful
          things is intentful harm being done to other people they sign up under
          duress or those who those people sell to. wagering dollars as
          comparative as shareholder rights or counterfeit being mixed in supply
          or achieving a purchase is; or copyright over patents. invoices are
          theft; debt interest per time, or on customers, is too per price or
          compound on their customers required, unrequited...
          <br />
          <br />
        </span>
      </div>
    );
  }
}
