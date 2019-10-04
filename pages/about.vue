<template>
  <div class="tab-frame">
    <label class="label" @click="toggleMenu">Index</label>
    <div
      id="content-menu"
      class="content-menu"
      :class="{
        fixed: fixTop,
        visible: isMenuVisible,
        adjustToFooter: fixBottom,
      }"
    >
      <ul>
        <li>
          <a class="link-main" href="#introduction">Introduction</a>
          <ul>
            <li>
              <a class="link" href="#not-what-you-where-told">
                Smart Contracts Are Not What You Were Told
              </a>
            </li>
            <li>
              <a class="link" href="#blockchain-oracles">
                Blockchain Oracles, And Their Problem
              </a>
            </li>
            <li>
              <a class="link" href="#don">
                The Solution: A Decentralized Oracle Network
              </a>
            </li>
            <li>
              <a class="link" href="#trust">
                100% Truth, 0% Trust
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a class="link-main" href="#flow">
            Flow of the protocol
          </a>
          <ul>
            <li>
              <a class="link" href="#witnet-as-a-blockchain">
                Witnet as a blockchain
              </a>
            </li>
            <li>
              <a class="link" href="#retrieve-attest-deliver">
                Retrieve-Attest-Deliver
              </a>
            </li>
            <li>
              <a class="link" href="#miners">
                Miners
              </a>
            </li>
            <li>
              <a class="link" href="#bridges">
                Bridges
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a class="link-main" href="#consensus">
            Consensus
          </a>
          <ul>
            <li>
              <a class="link" href="#reputation-system">
                Reputation System
              </a>
            </li>
            <li>
              <a class="link" href="#defense-attacks">
                Defense over Attacks
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a class="link-main" href="#development">
            Development
          </a>
          <ul>
            <li>
              <a class="link" href="#sheikah-radon">
                Sheikah and Radon
              </a>
            </li>
            <li>
              <a class="link" href="#rust">
                Rust
              </a>
            </li>
            <li>
              <a class="link" href="#smart-contracts">
                Smart contracts
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a class="link-main" href="#wit-token">
            WIT token
          </a>
        </li>
        <li>
          <a class="link-main" href="#sum-up">
            To sum up
          </a>
          <ul>
            <li>
              <a class="link" href="#development-status">
                The protocol at the moment
              </a>
            </li>
            <li>
              <a class="link" href="#different-from-others">
                Witnet different from other oracle proyects
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="content">
      <h3 class="title">What is Witnet?</h3>
      <a class="link-main" href="#introduction">
        <h3 id="introduction" ref="element" class="section">Introduction</h3>
      </a>
      <p>
        Witnet is a decentralized oracle network (DON) that connects smart
        contracts to the outer world. Generally speaking, it allows any piece of
        software to retrieve the contents published at any web address at a
        certain point in time, with complete and verifiable proof of its
        integrity and without blindly trusting any third party.
      </p>
      <p>
        In other words, the Witnet protocol allows a network of computers to act
        as a "decentralized oracle" that retrieves, attests and delivers
        information to smart contracts without having to place trust in a single
        entity.
      </p>
      <p>Wait, what? Ok, lets go one step at a time.</p>
      <a class="link" href="#not-what-you-where-told">
        <h4 id="not-what-you-where-told" ref="element" class="subsection">
          Smart Contracts Are Not What You Were Told
        </h4>
      </a>
      <p>
        Over the last years, blockchain technology has promised to revolutionize
        business by allowing creation of "smart contracts" that, unlike paper
        contracts, are impossible to breach.
      </p>
      <p>
        Actually, those smart contracts are nothing more than small programs
        that can be run in a trustless manner. That is: once they are created,
        no one can stop them from doing exactly what they were created for. They
        just obey their own source code, and censorship is just impossible.
      </p>
      <p>
        This is a really powerful idea. If you can write a smart contract that:
      </p>
      <p class="p7">
        1. implements the logic of an agreement, and <br />
        2. can execute the clauses of the contract on its own (like paying Alice
        or Bob depending on the outcome of some event),
      </p>
      <p>
        then you have a contract that is capable of enforcing itself and leaves
        no room for contestation. Boom &#x1F4A3;.
      </p>
      <a class="link" href="#blockchain-oracles">
        <h4 id="blockchain-oracles" ref="element" class="subsection">
          Blockchain Oracles, And Their Problem
        </h4>
      </a>
      <div class="image-container">
        <img
          class="pic a"
          :src="images.pic1"
          alt="blockchains and oracle problem"
        />
      </div>
      <p>
        Given that smart contracts need to be completely deterministic
        <a class="link" href="#comentario"><sup>1</sup></a> and so all nodes
        execute the same code, they do not support input of data from
        non-deterministic sources such as APIs or websites.
      </p>
      <p>
        As a result, smart contracts are mostly isolated from the rest of the
        Internet, which dramatically reduces their transformative potential. At
        the end of the day, the output of a program does not depend solely on
        its source code, but also on the input data it operates upon.
      </p>
      <p>
        Of course, as the creator of a smart contract, you can create a method
        that allows you and only you to act as an "oracle" by introducing
        information from the outside at will. But you would be completely
        breaking the trustless nature of a smart contract. If trust is put in a
        single entity, there you have a single point of failure that can easily
        be hacked or corrupted.
      </p>
      <p>
        Smart contracts connected to the real world will not be completely
        trustless and will not release their full potential until we have ways
        to feed them information trustlessly.
      </p>
      <p>This is often called <i>"the oracle problem"</i>.</p>
      <a class="link" href="#solution">
        <h4 id="don" ref="element" class="subsection">
          The Solution: A Decentralized Oracle Network
        </h4>
      </a>
      <p>
        The Witnet protocol aims to create an overlay network that connects
        smart contracts to any online data source. Sport results, stock prices,
        weather forecasts or even other blockchains can be easily queried
        (preferably through APIs).
      </p>
      <p>
        The protocol describes a distributed network of peer nodes -which we
        fondly call <i>witnesses</i>- who earn WIT tokens as a reward for
        retrieving web data and reporting it directly to the smart contracts.
        That is, a Decentralized Oracle Network (DON). <br />
        More precisely, we outline a Decentralized Oracle Network as:
      </p>
      <ul>
        <li>
          a computer network made up of nodes (computers running a specific
          software),
        </li>
        <li>
          which communicate and operate as peers in compliance with an agreed
          protocol,
        </li>
        <li>
          to acquire knowledge of information that is external to the network,
        </li>
        <li>
          verify and agree on the veracity of the acquired information,
        </li>
        <li>
          and supply such verified information to other applications or networks
          that may need it.
        </li>
      </ul>
      <p>
        In other words, the Witnet Protocol is Decentralized Oracle Network, a
        peer-to-peer (P2P) network capable of processing
        <a href="#retrieve-attest-deliver" class="link"
          >Retrieve-Attest-Deliver</a
        >
        requests.
      </p>
      <p>
        You can find a deeper explanation of the DON in this
        <a
          class="link"
          href="https://medium.com/witnet/designing-a-decentralized-oracle-network-cad5c5855ba2"
          >post</a
        >.
      </p>
      <p>
        The bottom line is that a considerable number of randomly selected,
        anonymous peers retrieving information from one or more sources can
        converge into a single truth about the data they retrieved if a majority
        of them are incentivized to report the retrieved data honestly and they
        apply a common consensus algorithm that resolves inconsistencies.
      </p>
      <p>
        This Decentralized Oracle Network (DON) maintains and distributes a
        blockchain data structure that serves as a common ledger for the
        operation of the protocol as well as for the WIT token, which is central
        to incentivizing the network players to abide by the protocol and make
        them liable for any misbehavior. Witnesses are also in charge of
        validating transactions in the network and bundling them into blocks
        that get appended to the blockchain periodically.
      </p>
      <p>
        The protocol has been conceived to ensure utmost decentralization and
        fairness, so each witness' weight in the network is not aligned to their
        computing power. Instead, the probability for every witness to be
        assigned tasks or mine new blocks is directly proportional to their past
        performance in terms of honesty: their reputation.
      </p>
      <p class="tip">
        TIP: <br />
        Of course, the so-called miners are not actual human beings sitting in
        front of a computer, fulfilling assignments coming from an Internet
        overlord that commands them to use their web browser to navigate to a
        certain website and take a snapshot or copy some text that they must
        report. Indeed, the miners are just computers running a software
        (Witnet-rust) that automatically receive and execute a series of tasks
        without the owner of the computer having to actively do anything else
        than installing it.
      </p>
      <a class="link" href="#trust">
        <h4 id="trust" ref="element" class="subsection">
          100% Truth, 0% Trust
        </h4>
      </a>
      <p>
        Data retrieved, attested and delivered using the Witnet protocol is
        reliable not because of authority but because it comes from anonymous,
        randomly selected nodes, and so non-coordinated, who are incentivized to
        remain honest and to compete for rewards.
      </p>
      <p>
        In addition, integrity of this data is guaranteed by a consensus
        algorithm that detects fraudsters, who are immediately punished.
      </p>
      <p>
        The progressive
        <a class="link" href="#consensus">reputation protocol</a> plays a
        central role in maintaining every participant active and honest by
        creating short, middle and long term incentives for them to abide by the
        protocol and not to tamper with the data they broker.
      </p>
      <p class="info">
        INFO: <br />
        Please note that Witnet's aim is not spotting fake data, but
        guaranteeing a 1:1 match between what is published online—regardless of
        its truthness—and the data that is eventually delivered to the smart
        contracts.
      </p>
      <a class="link-main" href="#flow">
        <h3 id="flow" ref="element" class="section">Flow of the protocol</h3>
      </a>
      <p>
        The Witnet protocol runs a single purpose blockchain with a token called
        WIT that relies on a P2P network. The nodes of the network are called
        <i>witnesses</i>, and are incentivised by the WIT token to:
      </p>
      <ul>
        <li>
          <a class="link" href="#retrieve-attest-deliver"
            >Retrieve, Attest and Deliver</a
          >
          data from a data request
        </li>
        <li>
          <a class="link" href="#miners">Mine</a> a block to be added in the
          blockchain
        </li>
        <li>
          Be a <a class="link" href="#bridges">bridge-node</a> and connect the
          Witnet protocol to a Smart-contract platform, for example Ethereum
        </li>
      </ul>
      <div class="image-container">
        <img class="pic d" :src="images.pic4" alt="Witnet-Ethereum flow" />
      </div>
      <p id="run-a-node">
        Because the Witnet blockchain is free, open, and neutral,
        <a class="link" href="https://docs.witnet.io/try/run-a-node/"
          >you can run your own node</a
        >
        and mine blocks on the Witnet blockchain. Every node maintains the
        history of all the transactions on the blockchain.
      </p>
      <a class="link" href="#witnet-as-a-blockchain">
        <h4 id="witnet-as-a-blockchain" ref="element" class="Subection5">
          Witnet as a blockchain
        </h4>
      </a>
      <div class="image-container">
        <img class="pic c" :src="images.pic3" alt="Witnet as a blockchain" />
      </div>
      <p>
        The Witnet Protocol runs on its own blockchain with a native token
        called WIT. Having its own blockchain guarantees that the fate of Witnet
        is not tied to any other Blockchain, making Witnet much more independent
        and smart contract platform agnostic.
      </p>
      <p>
        Other projects rely heavily on ERC-20 tokens in the Ethereum blockchain
        to incentivize oracles to resolve tasks. This fact will hinder their
        viability until Ethereum’s scalability challenges are solved or they
        accept alternative means of payment.
      </p>
      <p>
        In addition, the main key of Witnet is the
        <a class="link" href="#consensus">reputation system</a>. Such a
        mechanism would not only be hard but also expensive to implement in
        other smart contract platforms. And finally and more important, mining
        rewards subsidize the data request costs at the initial stage of the
        protocol.
      </p>
      <a class="link" href="#retrieve-attest-deliver">
        <h4 id="retrieve-attest-deliver" ref="element" class="Subection6">
          Retrieve-Attest-Deliver
        </h4>
      </a>
      <p>
        Once a Data Request is published, some nodes are selected (by Reputation
        system proof of eligibility, see the
        <a class="link" href="#consensus">Consensus</a>
        section for more details), to retrieve the data from the APIs specified
        in the data request, attest the result and deliver it. Meaning by this,
      </p>
      <ul>
        <li>
          Retrieve: to acquire knowledge of information that is external to the
          network.
        </li>
        <li>
          Attest: to verify and agree on the veracity of the retrieved
          information.
        </li>
        <li>
          Deliver: to supply such attested information to the creator of the RAD
          request.
        </li>
      </ul>
      <p>
        <a
          class="link"
          href="https://docs.witnet.io/protocol/data-requests/overview/"
          >Radon</a
        >
        is a declarative language in charge of coordinating the retrieval,
        aggregation, tally and delivery of data strictly as specified in the
        requests. More details about the data requests can be found
        <a class="link" href="#sheikah-radon">here</a>.
      </p>
      <p>
        Each witness sends the hash of the claim as a commitment, the actual
        claim will be published when the rest of the designated witnesses have
        also made their own commitments.
      </p>
      <p>
        The flow, given three APIs and two nodes resolving the data request, is
        symbolize in the next figure:
      </p>
      <div class="image-container">
        <img class="pic e" :src="images.pic5" alt="Witnet flow" />
      </div>
      <a class="link" href="#miners">
        <h4 id="miners" ref="element" class="Subection7">Miners</h4>
      </a>
      <p>
        As in any blockchain, the miners are nodes in charge of adding blocks to
        the blockchain. These nodes are selected by the Proof of Eligibility,
        described <a class="link" href="#reputation-formula">here</a>. Due to
        the <a class="link" href="#consensus">Reputation system</a>, the
        barriers to entry are lower than in other Oracles since new nodes do not
        need to stake a significant monetary amount nor invest in expensive
        hardware to become eligible to resolve data requests or mining. This
        fact incentives new nodes to join the network and thus helps the
        decentralization.
      </p>
      <a class="link" href="#bridges">
        <h4 id="bridges" ref="element" class="subection">Bridges</h4>
      </a>
      <p>
        The bridge nodes are the ones in charge of interacting between Witnet
        and an external public Blockchain.
      </p>
      <p>
        So far the Witnet Protocol is been developed to interact with smart
        contracts in Ethereum. These are able to send data requests to the
        Witnet network and get the responses back thanks to the bridge nodes
        that make Witnet act as a sidechain of Ethereum. For now the bridging
        contracts are only deploy in Rinkeby and Görli networks. Client smart
        contracts only need to interact with the Witnet Bridge Interface (WBI)
        for which the addresses can be found below:
      </p>
      <div class="image-container">
        <img class="pic f" :src="images.pic6" alt="Witnet-Ethereum bridge" />
      </div>
      <ul>
        <li><b>Rinkeby</b> 0xf0C67374D08e72dd7424982F76870AE0D6F2055e</li>
        <li><b>Görli</b> 0x1053c33f1DcFF9c8F6F6DC07e3F8cb84e46232A1</li>
      </ul>
      <p>
        Although for now Witnet interacts with Ethereum, it will actually be
        available to interact with Bitcoin or any other public blockchain.
      </p>
      <p>
        Bridge nodes are explained in more detail in this article from our
        <a
          class="link"
          href="https://medium.com/witnet/ethereum-loves-witnet-9a3fd21e6f5c"
          >blog</a
        >.
      </p>
      <a class="link-main" href="#consensus">
        <h3 id="consensus" ref="element" class="section">Consensus</h3>
      </a>
      <a class="link" href="#reputation-system">
        <h4 id="reputation-system" ref="element" class="subsection">
          Resputation System
        </h4>
      </a>
      <p>
        The consensus mechanism is based on a reputation system. Instead of a
        <b>Proof of Work</b> (PoW) or <b>Proof of Stake</b> (PoS), a node is
        probabilistically chosen depending on the <i>good reputation</i> it has
        achieved resolving Data Requests. This way any node has a chance to earn
        WITs, and it does not depend on how much stake it has and neither on its
        hardware, as it happens for PoW and PoS. Witnet features a sort of
        Byzantine Fault Tolerance algorithm. Nodes, through a cryptographic
        sortition scheme, secretly compute their eligibility for performing
        tasks (mining, witnessing data requests), i.e., they compute their
        <b>Proof of Eligibility</b> (PoE). Such proof is later verified by the
        rest of the nodes in the network. Among those block reporters elected,
        the block proposed by the peer with higher reputation is accepted (if
        valid). More details about the importance of the Cryptographic sortition
        can be found
        <a
          class="link"
          href="https://medium.com/witnet/cryptographic-sortition-in-blockchains-the-importance-of-vrfs-ad5c20a4e018"
          >here</a
        >.
      </p>
      <p id="reputation-formula">
        As described in the
        <a class="link" href="https://witnet.io/static/witnet-whitepaper.pdf">
          Whitepaper
        </a>
        a node <MathjaxExample :formula="formulas.m_i" /> in epoch
        <MathjaxExample :formula="formulas.t" />
        is elected, so it will later publish the PoE and it will finally mine
        the block (resolve a DR or whatever it needs to do) depending on
        reputation with respect to the rest of the nodes. <br />
        In particular, the eligibility is calculated based on this equation:
      </p>
      <div class="p-padding">
        <MathjaxExample :formula="formulas.reputation" />
      </div>
      <p>
        Where,
      </p>
      <ul>
        <li>
          <MathjaxExample :formula="formulas.rand" /> is a public randomness
          that can be extracted from the blockchain at epoch
          <MathjaxExample :formula="formulas.t" />,
        </li>
        <li>
          <MathjaxExample :formula="formulas.rand_mi" /> is a
          <a
            class="link"
            href="https://medium.com/witnet/cryptographic-sortition-in-blockchains-the-importance-of-vrfs-ad5c20a4e018"
          >
            VRF function
          </a>
          of the message <MathjaxExample :formula="formulas.t_rand" /> produced
          with private key <MathjaxExample :formula="formulas.m_i" />,
        </li>
        <li>
          <MathjaxExample :formula="formulas.h" /> is a deterministic, uniform
          and non-reversible hash function,
        </li>
        <li>
          <MathjaxExample :formula="formulas.l" /> is the number of bits of the
          output size of the <MathjaxExample :formula="formulas.h" />
          hash function,
        </li>
        <li>
          <MathjaxExample :formula="formulas.i_i" /> is the reputation of
          participant <MathjaxExample :formula="formulas.m_i" /> at epoch
          <MathjaxExample :formula="formulas.t" />, calculated as
          <div class="p-padding">
            <MathjaxExample :formula="formulas.i_reputation" />
          </div>
          being <MathjaxExample :formula="formulas.ri" /> the reputation of
          <MathjaxExample :formula="formulas.m_i" /> at epoch
          <MathjaxExample :formula="formulas.t" /> and
          <MathjaxExample :formula="formulas.rt" /> the total reputation at the
          same epoch.
        </li>
      </ul>
      <p>
        You can take a look to
        <a class="link" href="https://witnet.io/static/witnet-whitepaper.pdf"
          >sections 4 and 5 of the Whitepaper </a
        >to find more details about the reputation system.
      </p>
      <a class="link" href="#defense-attacks">
        <h4 id="defense-attacks" ref="element" class="subection">
          Defense over Attacks
        </h4>
      </a>
      <p>
        The most frequent attacks in blockchains have been strongly analized in
        the last years for the cases of PoW and PoS consensus, but how does a
        reputation system based blockchain defend over these attacks? In our
        <a class="link" href="https://medium.com/witnet">blog in Medium</a> you
        can find specific explanations, but these are in short the main ideas:
      </p>
      <ul>
        <li>
          <b>Sybil attacks</b>: The reputation system works very well against
          this attack since it requires the sybils to work on the network to
          gain sufficient influence. In addition, the Collateral makes the
          attack much more expensive.
        </li>
        <li>
          <b>Eclipse attacks</b>: In order to avoid an attacker monopolizing all
          the connections of a node, a P2P bucketing system has been
          implemented. More details can be found in this
          <a
            class="link"
            href="https://medium.com/witnet/the-p2p-bucketing-system-in-witnet-d893dce4b8c5"
            >post of Medium</a
          >.
        </li>
        <li>
          <b>Bribery attacks</b>: The implementation of a Collateral fee highly
          increases the Bribe to pay, for more informations take a look on this
          <a
            class="link"
            href="https://medium.com/witnet/deterring-bribery-attacks-on-decentralized-oracle-networks-5bcf87d2cb22"
            >post</a
          >.
        </li>
        <li>
          <b>Majority attacks</b>: The implementation of Witnet guarantees that
          in order to perform a Majority attack the attacker would need to hold
          51% of the total reputation.
        </li>
        <li>
          <b>DDoS attacks</b>: Witnet implements Dandelion to obfuscate the
          relation between IPs and Public keys.
        </li>
      </ul>
      <a class="link-main" href="#development">
        <h3 id="development" ref="element" class="section">Development</h3>
      </a>
      <p>
        So far we have seen a bit of the main ideas of Witnet's protocol and its
        architecture, but how is witnet really built?<br />
        The Witnet Ecosystem consists of several parts and so it has different
        development areas. Some of them are:
      </p>
      <ul>
        <li>
          Sheikah and Radon, for Data requests
        </li>
        <li>
          Rust, for nodes in the Network
        </li>
        <li>
          Smart contract languages
        </li>
      </ul>
      <p>
        Let's explain each of them.
      </p>
      <a class="link" href="#sheikah-radon">
        <h4 id="sheikah-radon" class="subsection">Sheikah and Radon</h4>
      </a>
      <p>
        Creating Data Requests is one of the main actions in Witnet, as when
        they are published the hole Oracle protocol takes place. So how do you
        create them? First we need to talk about Sheikah. Sheikah is a Witnet
        compatible desktop wallet, data requests and smart contracts development
        environment. It can be thought as a friendly user wallet in which you
        can easily create data requests (DR). A user can directly go to Sheikah
        and customize a template of a DR or just create a new one, as the
        Sheikah desktop app is intended to be used as an IDE for visually and
        safely composing and testing Witnet data requests.
      </p>
      <p>
        The development of Sheikah can be followed in the
        <a class="link" href="https://github.com/witnet/sheikah">
          github repository
        </a>
        . Here you can find instructions for installing and testing it.
      </p>
      <p>
        We have seen that a user can create data requests using Sheikah, but how
        does Witnet read the data collected by the witnesses? Here is where the
        RAD Engine comes out. <br />
        The RAD Engine is the component in charge of processing data requests
        coming from Witnet clients. That is, coordinating retrieval,
        aggregation, tally and delivery of data strictly as specified in the
        requests. All data requests contain explicit instructions on what the
        RAD Engine must do during every stage. These instructions, specified
        using RAD Object Notation (RADON), are interpreted by the RAD Engine.
        More information about RADON and data requests can be found
        <a
          class="link"
          href="https://docs.witnet.io/protocol/data-requests/overview/"
          >here</a
        >.
      </p>
      <p>
        Summarizing, Witnet Data Request are fully parameterizable through the
        RADON language. Not only the number of nodes can be specified but also
        how they aggregate Data from different sources, filter and achieve
        consensus among them. More than that Witnet allows smart contracts to
        define their own security guarantees by specifying the collateral that
        needs to be staked by the nodes to participate in the report of the Data
        Request.
      </p>
      <p>
        You can check what a Witnet data request looks like in this
        <a
          class="link"
          href="https://docs.witnet.io/protocol/data-requests/examples/"
          >example</a
        >.
      </p>
      <a class="link" href="#rust">
        <h4 id="rust" ref="element" class="subsection">Rust</h4>
      </a>
      <p>
        A point of discussion was which language we should use to build the
        nodes. Having its own underlying blockchain, Witnet requires code that
        is as fast as C or C++ but memory safe to prevent security
        vulnerabilities. At the same time, we wanted to produce concurrent code
        that could take advantage of modern hardware.
      </p>
      <p>
        After analyzing the possible languages to use, we decided to use Rust,
        some of the reasons were:
      </p>
      <ul>
        <li>
          Performance
        </li>
        <li>
          Memory safety
        </li>
        <li>
          Influence from functional languages
        </li>
        <li>
          Statically typed with type inference
        </li>
        <li>
          Awesome compiler and tooling
        </li>
        <li>
          Metaprogramming
        </li>
        <li>
          Thriving community
        </li>
      </ul>
      <p>
        The details about the choice of Rust can be found in this
        <a
          class="link"
          href="https://medium.com/witnet/8-reasons-why-witnet-will-make-the-most-of-the-rust-programming-language-c1cfdfca8ced"
        >
          Post
        </a>
        .
      </p>
      <p>
        Once Rust was clear, we created Witnet-rust, an open-source
        implementation of the Witnet protocol written in Rust. It is a native
        app providing "full node" functionality of the Witnet Decentralized
        Oracle Network protocol.
      </p>
      <p>
        There are installation guides to run a node for several operator
        systems. You can find them
        <a class="link" href="https://docs.witnet.io/try/run-a-node/">here</a>.
      </p>
      <a class="link" href="#smart-contracts">
        <h4 id="smart-contracts" ref="element" class="subsection">
          Smart contracts
        </h4>
      </a>
      <p>
        As Witnet is a decentralized oracle for smart contracts, the bridge
        nodes need to be able to understand and interact with each smart
        contract language is needed. As explained in the
        <a class="link" href="#bridges">bridges section</a>, for now it has only
        been implemented a bridge with Ethereum wherefore it has been created a
        Witenet-Bridge contract in Solidity. <br />
        A guide for writing a Solidity contract that deploys a Witnet request
        can be found
        <a
          class="link"
          href="https://docs.witnet.io/tutorials/bitcoin-price-feed/contract/"
          >here</a
        >.
      </p>
      <a class="link-main" href="#wit-token">
        <h3 id="wit-token" ref="element" class="section">WIT token</h3>
      </a>
      <p>
        As mentioned in
        <a class="link" href="#witnet-as-a-blockchain">Witnet as blockchain</a>,
        Witnet runs its own Blockchain and has a native token called WIT. The
        Wits are earned by the witnesses when resolving a data request and
        mining blocks, and are used to encourage fair and trustworthy behaviour
        in the network.
      </p>
      <p>
        Some information about the WIT's distribution is the following:
      </p>
      <ul>
        <li>
          No more than 2,500,000,000 WITs will ever exist.
        </li>
        <li>
          70% will be mined by witness nodes through block rewards that will
          decrease over time.
        </li>
        <li>
          30% will be minted in the early stage block (first block in the
          chain). These will be assigned as follows:
          <ul>
            <li>
              20% to Witnet Foundation for development, research and engineering
              grants, community building and marketing actions; as well as
              rewarding previous Stampery investors.
            </li>
            <li>
              10% to Republic investors (max. $1.07M) and a separate private
              sale limited to accredited investors (max. $28.93M).
            </li>
          </ul>
        </li>
      </ul>
      <p>
        The 70% that will be distributed through mining has the following
        structure: <br />
        The number of WITs generated per block starts at 500 and is set to
        decrease geometrically, with a 50% reduction every 1,750,000 blocks, or
        approximately 5 years. Each of these periodic reductions is known as
        halving. The result is that the number of WITs ever created by the
        issuance mechanism will never exceed 2,500,000,000 minus the 30% that
        has already been preassigned. This is represented in the next figure:
      </p>
      <div class="image-container">
        <img class="pic g" :src="images.pic7" alt="wit graphic" />
      </div>
      <a class="link-main" href="#sum-up">
        <h3 id="sum-up" ref="element" class="section">To sum up</h3>
      </a>
      <a class="link" href="#development-status">
        <h4 id="development-status" ref="element" class="subsection">
          The protocol at the moment (Current development status)
        </h4>
      </a>
      <p>
        The Witnet ecosystem is an open source enviorment that is constantly
        under development. <br />
        In witnet-rust the status is the following:
      </p>
      <ul>
        <li>
          All the main components are in place—but they need yet to be battle
          tested before mainnet.
        </li>
        <li>
          Testnet-4 is live.
          <a class="link" href="https://docs.witnet.io/community/roadmap/">
            Here's the roadmap
          </a>
          and this is
          <a class="link" href="https://docs.witnet.io/try/run-a-node/">
            how to run a node.
          </a>
        </li>
        <li>
          The Witnet community is doing its best to make witnet-rust rock solid
          as soon as possible.
        </li>
      </ul>
      The ethereum bridge is actually three different pieces of software:
      <ul>
        <li>
          The UsingWitnet Solidity contract that Ethereum developers can extend
          (contract MyContract is UsingWitnet { ... }).
        </li>
        <li>
          The Witnet Bridge Interface (WBI): an Ethereum contract where data
          requests are publicly posted to.
        </li>
        <li>
          The bridge component inside
          <a class="link" href="https://github.com/witnet/witnet-rust">
            Witnet-Rust
          </a>
          , which monitors the WBI for new Requests.
        </li>
      </ul>
      <p>
        For more information about the Witnet Protocol development areas please
        take a look on the
        <a class="link" href="#development">Development section</a>.
      </p>
      <p>
        Contributions are more than welcome, from people who contribute to
        Witnet-Rust or Sheikah to those who want to connect their Ethereum smart
        contracts to external APIs! <br />
        Just click
        <nuxt-link class="link" to="/#participate">here</nuxt-link>
        to know how to participate &#128540;
      </p>
      <a class="link" href="#different-from-others">
        <h4 id="different-from-others" class="Subsection14">
          Witnet different from other oracle projects
        </h4>
      </a>
      <p>
        To sum up, until this moment most oracle projects base their approach on
        specialized oracles. Each oracle is connected only to a certain set of
        APIs or protocols, and you must choose which oracle to use.
      </p>
      <p>
        From our perspective, specialized oracles are:
      </p>
      <ul>
        <li>
          likely to have conflicts of interest,
        </li>
        <li>
          scarce and thus rather centralized as too much trust is put on each of
          them,
        </li>
        <li>
          trivially predictable and thus easily targetable by DoS attacks,
        </li>
        <li>
          in the case of needing human intervention, slow to resolve.
        </li>
      </ul>
      <p>
        Witnet approach is instead based on the most generalized form of
        oracles.They perform
        <a class="link" href="#retrieve-attest-deliver">
          retrieve-attest-deliver
        </a>
        tasks without distinction between the sources they query. In Witnet, the
        oracle nodes in the network are called "witnesses", they are automated
        nodes that you can hire to retrieve information from the Internet and
        deliver it to you or your smart contracts. Although you can decide how
        many witnesses to employ, the most important fact is that you can't
        choose who they are. Tasks are randomly assigned to witnesses in
        proportion to their
        <a class="link" href="#consensus">reputation</a>. This way, we get rid
        of any conflict of interests, given that oracle nodes can't even predict
        which tasks will be assigned to them.
      </p>
      <p>
        The information for any Data Request is collected from any public API
        specified in it. At the current stage of the protocol Witnet does not
        retrieve data from authenticated APIs. Some of the aforementioned
        specialized oracle networks relay on the confidentiality guarantees
        offered by trusted execution environments like Intel SGX. This "enclave"
        is only available on selected hardware, so it's a clear barrier to
        entry. Moreover, the SGX has recently been proven vulnerable to many
        attacks, including the widely known
        <a class="link" href="https://spectreattack.com/spectre.pdf">
          Spectre attack
        </a>
        .Those are the main reasons why Witnet focuses on data gathered by
        public APIs.
      </p>
      <p>
        A big difference with respect to other Oracles is that Witnet Data
        Request are fully parameterizable through the
        <a class="link" href="#sheikah-radon">RADON</a> language. Not only the
        number of nodes can be specified but also how they aggregate Data from
        different sources, filter and achieve consensus among them. More than
        that Witnet allows smart contracts to define their own security
        guarantees by specifying the collateral that needs to be staked by the
        nodes to participate in the report of the Data Request. This prevents
        many <a class="link" href="#defense-attacks">attack vectors</a>.
      </p>
      <p>
        In summary, our proposal has a "fairness principle" hard-written into
        every detail. That's the main reason for refusing the use of TEEs or the
        SGX. We want to give everyone the possibility to spend the spare CPU and
        bandwidth of their computers (or servers, or phones, or even fridges!)
        fulfilling retrieve-attest-deliver tasks and earning rewards in
        exchange.
      </p>
      <p>
        The Witnet community is open to everyone. Even if you are not a
        developer or node operator, there are
        <a class="link" href="https://docs.witnet.io/community/contributing/"
          >many things you can do</a
        >
        to spread the word!
      </p>
      <p id="comentario" class="comentario">
        <sup>1</sup> Otherwise, the contracts could have totally different
        output values when executed across all the nodes maintaining the
        blockchain, therefore causing inconsistencies that would lead to
        breaking the network consensus.
      </p>
    </div>
  </div>
</template>
<script>
import MathjaxExample from '~/components/MathjaxExample.vue'
export default {
  components: {
    MathjaxExample,
  },
  data() {
    return {
      lastScrollPosition: 0,
      fixTop: false,
      fixBottom: false,
      formulas: {
        m_i: '$M_i$',
        t: '$t$',
        reputation: '$$H(<t||rand(t)_{M_i}>)/2^L \\leq I_i^t$$',
        rand: '$rand(t)$',
        rand_mi: '$<t||rand(t)_{M_i}>$',
        t_rand: '$t||rand(t)$',
        h: '$H$',
        l: '$L$',
        i_i: '$I_i^t$',
        i_reputation: '$$I_i^t=\\frac{r_i^t}{R^t},$$',
        ri: '$r_i^t$',
        rt: '$R^t$',
      },
      isMenuVisible: false,
      images: {
        pic0: require('@/assets/main-wiw.svg'),
        pic1: require('@/assets/contract-separate .svg'),
        pic2: require('@/assets/decentralize-net.svg'),
        pic3: require('@/assets/blockchain.svg'),
        pic4: require('@/assets/image-eht-with-flow.svg'),
        pic5: require('@/assets/image-witnet-flow.svg'),
        pic6: require('@/assets/image-bridge.svg'),
        pic7: require('@/assets/graph.svg'),
      },
    }
  },
  head() {
    return {
      title: 'Witnet - What is Witnet?',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'The Witnet protocol gives smart contracts real power by connecting them to any online data source. Sport results, stock prices, weather forecasts or even other ...',
        },
      ],
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
    window.addEventListener('scroll', this.changeFixTop)
    window.addEventListener('scroll', this.changeFixBottom)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    changeFixTop() {
      if (this.lastScrollPosition > 100) {
        this.fixTop = true
      } else {
        this.fixTop = false
      }
    },
    changeFixBottom() {
      if (this.lastScrollPosition > 11300) {
        this.fixTop = false
        this.fixBottom = true
      } else {
        this.fixBottom = false
      }
    },
    toggleMenu() {
      this.isMenuVisible = !this.isMenuVisible
    },
    onScroll(event) {
      const sections = document.querySelectorAll('#content-menu a')
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop
      for (let i = 0; i < sections.length; i++) {
        const currLink = sections[i]
        const val = currLink.getAttribute('href')
        const refElement = document.querySelector(val)
        const refHeight = refElement.offsetTop + refElement.offsetHeight
        if (
          refElement.offsetTop <= this.lastScrollPosition &&
          refHeight > this.lastScrollPosition
        ) {
          const active = document.getElementsByClassName('active')[0]
          if (active) {
            active.classList.remove('active')
          }
          currLink.classList.add('active')
        }
      }
      this.lastScrollPosition = currentScrollPosition
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles/colors.scss';
.label {
  font-size: 26px;
  color: $grey-2;
  display: none;
}
.content-menu {
  font-size: 14px;
  position: fixed;
  left: 4vw;
  width: 20vw;
  & .visible {
    display: block;
  }
  ul {
    line-height: 1.5;
    list-style: none;
    .link-main {
      color: $purple;
      font-weight: 550;
      list-style: none;
      text-decoration: none;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .link {
    color: $grey-2;
    list-style: none;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
  .active {
    text-decoration: underline;
  }
}
.fixed {
  top: 1vh;
}
.adjustToFooter {
  bottom: 70vh;
}
.content {
  color: rgb(61, 61, 61);
  line-height: 25px;
  width: 50%;
  margin-top: 5vw;
  margin-bottom: 5vw;
  margin-left: 30vw;
  .link {
    text-decoration: none;
    color: $purple;
  }
  .link-main {
    text-decoration: none;
  }
  .p-padding {
    padding: 20px;
  }
  .title {
    color: $purple;
    padding-bottom: 32px;
  }
  .section {
    color: $purple;
  }
  .image-container {
    text-align: center;
    .pic {
      width: 50vw;
      padding: 20px;
      &.b {
        width: 20vw;
      }
      &.c {
        width: 30vw;
      }
    }
  }
  .comentario {
    font-size: 12px;
    border-top: 1px solid #bdbdbd;
    padding-top: 20px;
  }
}
@media screen and (max-width: 1200px) {
  .label {
    cursor: pointer;
    display: block;
    top: 15vh;
    left: 5px;
    color: $purple;
    background-color: white;
    border: 1px solid black;
    padding: 5px;
    position: fixed;
    display: none;
  }
  .content-menu {
    display: none;
    &.visible {
      display: none;
    }
  }
  .content {
    margin-top: 10vw;
    width: 80%;
    margin-left: 10vw;
  }
}
</style>
