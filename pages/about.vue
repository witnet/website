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
        contracts to the real, off-chain world. Broadly speaking, it allows any
        piece of software to retrieve information published at any web address
        at any point in time, with complete and verifiable proof of the
        information's integrity, without blindly trusting any third party.
      </p>
      <p>
        The Witnet protocol achieves this by permitting a network of computers
        to act as a "decentralized oracle" that retrieves, attests and delivers
        information to smart contracts, with no single point of trust.
      </p>
      <a class="link" href="#not-what-you-where-told">
        <h4 id="not-what-you-where-told" ref="element" class="subsection">
          Smart Contracts Are Not What You Were Told
        </h4>
      </a>
      <p>
        In recent years, blockchain technology has promised to revolutionize
        business through "smart contracts" that, unlike paper contracts, are
        impossible to breach.
      </p>
      <p>
        These smart contracts are simple programs, coded to automatically
        control the transfer of assets between two or more parties, and can be
        run in a trustless manner. Once deployed, no one can stop them from
        doing exactly what they were programmed for. They obey their own source
        code, and censorship is impossible.
      </p>
      <p>
        If you can write a smart contract that:
      </p>
      <p class="p7">
        1. implements the logic of an agreement, and <br />
        2. automatically executes the clauses of the contract - e.g. transfer an
        asset from Alice to Bob depending on the outcome of an event;
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
        <a class="link" href="#footnote1"><sup>1</sup></a> to ensure all nodes
        execute the same code, they do not support input of data from
        non-deterministic sources such as APIs or websites.
      </p>
      <p>
        As a result, smart contracts are mostly isolated from the rest of the
        Internet, which dramatically reduces their transformative potential.
        After all, the effectiveness of a program reraly depends solely on its
        source code, but also upon the input data it receives from interacting
        with the outside world.
      </p>
      <p>
        Of course, as the creator of a smart contract, you can create a method
        that allows specific parties to act as an "oracle" by introducing
        information from the outside when necessary. However, this undermines
        breaking the trustless nature of a smart contract. If trust is put in
        any single entity, then you have a single point of failure that can be
        attacked or corrupted.
      </p>
      <p>
        Smart contracts connected to the real world will never be completely
        trustless, nor release their full potential until we have ways to feed
        them information in a trustless way.
      </p>
      <p>This is often referred to <i>"the oracle problem"</i>.</p>
      <a class="link" href="#solution">
        <h4 id="don" ref="element" class="subsection">
          The Solution: A Decentralized Oracle Network
        </h4>
      </a>
      <p>
        The Witnet protocol aims to create an overlay network that connects
        smart contracts to any online data source, in a trustless, decentralized
        manner. Tese sources include, but are not limited to, sport results,
        stock prices, weather forecasts information and other blockchains.
      </p>
      <p>
        The protocol achives this by way of a distributed network of peer-nodes
        -colloquially referred to as <i>witnesses</i>- who earn WIT tokens as a
        reward for retrieving and securely delivering web information to smart
        contracts. That is, a Decentralized Oracle Network (DON). <br />
        More precisely, we outline a Decentralized Oracle Network as a computer
        network made up of nodes - computers running a specific software - which
        communicate and operate as peers in compliance with an agreed protocol:
      </p>
      <ul>
        <li>
          to acquire knowledge of information that is external to the network,
        </li>
        <li>
          to verify and agree on the veracity of the acquired information,
        </li>
        <li>
          and to supply the verified information to other applications or
          networks that may require it.
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
        blockchain data structure, which serves as a common ledger for the
        operation of the protocol. Witnesses are also in charge of validating
        transactions in the network and bundling them into blocks that get
        appended to the blockchain periodically.
      </p>
      <p>
        The protocol has been conceived to ensure utmost decentralization and
        fairness, so each witness' weight in the network is not aligned to their
        computing power. Instead, the probability for every witness to be
        assigned tasks or mine new blocks is directly proportional to their
        reputation as an honest and reliable node operator.
      </p>
      <p class="tip">
        TIP: <br />
        Of course, the so-called miners are not actual human beings sitting in
        front of a computer, fulfilling assignments. Instead, 
        the miners are just computers running the witnet-rust software
        that automatically receive and execute a series of tasks
      </p>
      <a class="link" href="#trust">
        <h4 id="trust" ref="element" class="subsection">
          100% Truth, 0% Trust through consensus
        </h4>
      </a>
      <p>
        Witnet aims to deliver verifiable, accurate data queries in a totally
        decentralized, trustless manner. To achieve this, numerous randomly
        selected, anonymous peers retrieve information from one or more sources
        and converge that information into a single truth. A common consensus
        algorithm is then applied to resolve inconsistencies.
      </p>
      <p>
        Data retrieved, attested and delivered using the Witnet protocol is
        reliable without centralized verification because it comes from
        anonymous, randomly selected and non-coordinated nodes, that are
        incentivized to remain honest and to compete for rewards.
      </p>
      <p>
        In addition, integrity of this data is guaranteed by a consensus
        algorithm that detects fraudsters, who are punished accordingly.
      </p>
      <p>
        The progressive
        <a class="link" href="#consensus">reputation protocol</a> plays a
        central role in ensuring every participant is both active and honest, by
        creating short, middle and long term incentives for them to abide by the
        protocol, and not to tamper with the data they broker.
      </p>
      <p class="info">
        NB: Witnet's purpose is not to spot fake data, but guarantee an exact
        match between what is published online—regardless of its
        truthfulness—and the data that is delivered to smart contracts.
      </p>
      <a class="link-main" href="#flow">
        <h3 id="flow" ref="element" class="section">Flow of the protocol</h3>
      </a>
      <p>
        The Witnet protocol runs a single purpose blockchain with a token called
        WIT, which relies on a P2P network. The nodes on the network are called
        <i>witnesses</i>, and are incentivised by the WIT token to:
      </p>
      <ul>
        <li>
          <a class="link" href="#retrieve-attest-deliver"
            >Retrieve, Attest and Deliver</a
          >
          data from any open API
        </li>
        <li>
          <a class="link" href="#miners">Mine</a> a block to be added in the
          blockchain
        </li>
        <li>
          Be a <a class="link" href="#bridges">bridge-node</a> and connect the
          Witnet protocol to other protocols, such as Ethereum
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
        viability until Ethereum’s scalability challenges are solved.
      </p>
      <p>
        In addition, the main key of Witnet is the
        <a class="link" href="#consensus">reputation system</a>. Such a
        mechanism would be both difficult, and expensive to implement on other
        smart contract platforms. And finally and more important, mining rewards
        subsidize the data request costs at the initial stage of the protocol.
      </p>
      <a class="link" href="#retrieve-attest-deliver">
        <h4 id="retrieve-attest-deliver" ref="element" class="Subection6">
          Retrieve-Attest-Deliver
        </h4>
      </a>
      <p>
        Once a data request is published, nodes are randomly selected (by
        Reputation System proof of eligibility, see the
        <a class="link" href="#consensus">Consensus</a>
        section for more details), to retrieve the data from the APIs specified
        in the data request, attest the result and deliver it to the smart
        contracts. <br />
        To define these terms:
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
          Deliver: to supply the attested information to the smart contract
          specified by the RAD request.
        </li>
      </ul>
      <p>
        <a
          class="link"
          href="https://docs.witnet.io/protocol/data-requests/overview/"
          >RADON</a
        >
        is the declarative language in charge of coordinating the retrieval,
        aggregation, tally and delivery of data strictly as specified in the
        requests. More details about data requests can be found
        <a class="link" href="#sheikah-radon">here</a>.
      </p>
      <p>
        Each witness sends the hash of the claim as a commitment - the claim
        itself will be published when the rest of the designated witnesses have
        also made their own commitments.
      </p>
      <p>
        The flow, given three APIs and two nodes resolving the data request, is
        symbolized in the following diagram:
      </p>
      <div class="image-container">
        <img class="pic e" :src="images.pic5" alt="Witnet flow" />
      </div>
      <a class="link" href="#miners">
        <h4 id="miners" ref="element" class="Subection7">Miners</h4>
      </a>
      <p>
        As with most blockchain structures,miners are nodes in charge of adding
        blocks to the blockchain. These nodes are selected by the Proof of
        Eligibility, described
        <a class="link" href="#reputation-formula">here</a>. Due to the
        <a class="link" href="#consensus">Reputation system</a>, the barriers to
        entry are lower than in other Oracles since new nodes do not need to
        stake a significant monetary amount, nor invest in expensive hardware to
        become eligible to resolve data requests or mining. This fact incentives
        new nodes to join the network and thus encourages decentralization.
      </p>
      <a class="link" href="#bridges">
        <h4 id="bridges" ref="element" class="subection">Bridges</h4>
      </a>
      <p>
        Bridge nodes are in charge of the interaction between Witnet and an
        external public blockchain.
      </p>
      <p>
        So far the Witnet Protocol has the ability to interact with smart
        contracts in Ethereum. These contracts are able to send data requests to
        the Witnet network and receive responses, thanks to the bridge nodes
        allowing Witnet to act as a sidechain of Ethereum.
      </p>
      <div class="image-container">
        <img class="pic f" :src="images.pic6" alt="Witnet-Ethereum bridge" />
      </div>
      <p>
        At present, the bridging contracts are only deployed in Rinkeby and
        Görli testing networks. Client smart contracts must interact, with the
        Witnet Requests Board (WRB), through a Proxy contract whose addresses
        can be found below:
      </p>
      <ul>
        <li><b>Rinkeby</b> 0x9ad9386e6886957A50D30996e35749eC4566a5d9</li>
        <li><b>Görli</b> 0x916B67a6D470aF09Fd9379d6C67f8552778346f9</li>
      </ul>
      <p>
        Whilst Witnet currently only interacts with the Ethereum blockchain,
        bridge nodes for various other public blockchains, including Bitcoin,
        are in the pipeline.
      </p>
      <p>
        More information on bridge nodes can be foundin this article from our
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
          Reputation System
        </h4>
      </a>
      <p>
        The consensus mechanism is based on a reputation system. Instead of a
        <b>Proof of Work</b> (PoW) or <b>Proof of Stake</b> (PoS), a node is
        probabilistically chosen depending on the <i>reputation</i> score it has
        attained resolving data requests. As a result, any node has a chance to
        earn WIT tokens, without needing to stake large amounts of money, or buy
        expensive hardware, as in the case of PoW/PoS. Witnet features an
        adaptation of the Byzantine Fault Tolerance algorithm. Nodes, through a
        cryptographic sortition scheme, secretly compute their eligibility for
        performing tasks (mining, witnessing data requests), i.e. they compute
        their <b>Proof of Eligibility</b> (PoE). Such proof is later verified by
        the rest of the nodes in the network. Among those block reporters
        elected, the block proposed by the peer with higher reputation is
        accepted (if valid). More details about the importance of the
        Cryptographic sortition can be found
        <a
          class="link"
          href="https://medium.com/witnet/cryptographic-sortition-in-blockchains-the-importance-of-vrfs-ad5c20a4e018"
          >here</a
        >.
      </p>
      <p id="reputation-formula">
        As described in the
        <a class="link" href="https://witnet.io/witnet-whitepaper.pdf">
          Whitepaper</a
        >, a node <MathjaxExample :formula="formulas.m_i" /> in epoch
        <MathjaxExample :formula="formulas.t" />
        is first elected, then publishes the PoE and finally, it mines the block
        (by e.g. resolving a DR) depending on reputation with respect to the
        rest of the nodes. <br />
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
        Please refer to
        <a class="link" href="https://witnet.io/witnet-whitepaper.pdf"
          >sections 4 and 5 of the Whitepaper </a
        >for more information regarding the reputation system.
      </p>
      <a class="link" href="#defense-attacks">
        <h4 id="defense-attacks" ref="element" class="subection">
          Defense over Attacks
        </h4>
      </a>
      <p>
        The most frequent attacks aimed at PoW and PoS consensus mechanisms in
        blockchains have been thoroughly analysed in recent years, but how does
        a reputation system based blockchain defend against these attacks? In
        our
        <a class="link" href="https://medium.com/witnet">blog in Medium</a> you
        can find specific explanations, but in summary:
      </p>
      <ul>
        <li>
          <b>Sybil attacks</b>: The reputation system works very well against
          this attack since it requires the sybils to work on the network to
          gain sufficient influence. In addition, a collateral fee is required
          when solving a data request, making the attack economically inviable.
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
          <b>Bribery attacks</b>: The implementation of the collateral fee makes
          any bribe very expensive, for more information, take a look on this
          <a
            class="link"
            href="https://medium.com/witnet/deterring-bribery-attacks-on-decentralized-oracle-networks-5bcf87d2cb22"
            >post</a
          >.
        </li>
        <li>
          <b>Majority attacks</b>: The implementation of Witnet guarantees that
          in order to perform a majority attack, the attacker would need to hold
          51% of the total reputation. This is an extremely unlikely scenario,
          even when reputation is pooled.
        </li>
        <li>
          <b>DDoS attacks</b>: Witnet implements Dandelion to obfuscate the
          relation between IPs and Public keys, making DDos attacks near
          impossible.
        </li>
      </ul>
      <a class="link-main" href="#development">
        <h3 id="development" ref="element" class="section">Development</h3>
      </a>
      <p>
        So far we have seen a bit of the main ideas behind Witnet's protocol and
        architecture, but upon what foundations has it been built?<br />
        The Witnet Ecosystem consists of several components and development
        projects. These include:
      </p>
      <ul>
        <li>
          Sheikah and Radon, for data requests
        </li>
        <li>
          Rust, for nodes in the Network
        </li>
        <li>
          Smart contract languages
        </li>
      </ul>
      <a class="link" href="#sheikah-radon">
        <h4 id="sheikah-radon" class="subsection">Sheikah and Radon</h4>
      </a>
      <p>
        Data requests (DR) are vital to Witnet’s product, and are foundational
        to the Oracle protocol's functionality. They are built on Sheikah, which
        functions as both a Witnet-compatible desktop wallet, and a development
        environment for data requests and smart contracts. A user can operate
        Sheikah and customize a template of a DR or create a new one from
        scratch. Sheikah desktop app is the perfect integrated development
        environment (IDE) for visually and safely composing and testing Witnet
        data requests.
      </p>
      <p>
        The development of Sheikah can be followed in the
        <a class="link" href="https://github.com/witnet/sheikah">
          github repository </a
        >, where you can also find instructions for installing and testing it.
      </p>
      <p>
        So how does Witnet read the data collected by the witnesses? This is
        where the RAD Engine comes into play. <br />
        The RAD Engine is the component in charge of processing incoming data
        requests from Witnet clients. It coordinates retrieval, aggregation,
        tally and delivery of data specified by the requests. All data requests
        contain explicit instructions on what the RAD Engine must do during each
        stage. These instructions, specified using RAD Object Notation (RADON),
        are interpreted by the RAD Engine. <br />
        More information about RADON and data requests can be found
        <a
          class="link"
          href="https://docs.witnet.io/protocol/data-requests/overview/"
          >here</a
        >.
      </p>
      <p>
        Witnet data request are fully parameterizable through the RADON
        language. Not only can the number of desired nodes be specified but the
        method by which these nodes aggregate data from different sources,
        filter results, and achieve consensus can be fully customized.
        Additionally, Witnet allows smart contracts to define their own security
        guarantees by specifying the minimum collateral required to participate
        in the report of the data request.
      </p>
      <p>
        You can see what a Witnet data request looks like in this
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
        There was much discussion as to which language should be used to build
        the nodes. Since it has it’s own underlying blockchain, Witnet requires
        code that is both as fast as C or C++ and also memory safe to prevent
        security vulnerabilities. At the same time, there was a need for
        concurrent code that could take advantage of modern hardware.
      </p>
      <p>
        After analyzing the possible languages to use, Rust was selected for the
        following reasons:
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
          Strong compiler and tooling
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
          post
        </a>
        .
      </p>
      <p>
        Witnet-rust is an open-source implementation of the Witnet protocol
        written in Rust. It is a native app providing "full node" functionality
        of the Witnet Decentralized Oracle Network protocol.
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
        As Witnet is a decentralized oracle network for smart contracts, the
        bridge nodes must be able to interpret and interact with other smart
        contract languages. As explained in the
        <a class="link" href="#bridges">bridges section</a>, the network
        currently has a functioning bridge with Ethereum built using Solidity.
        <br />
        A guide to writing a Solidity contract that deploys a Witnet request can
        be found
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
        Witnet runs its own Blockchain, with a native token called WIT. The WITs
        are earned by witnesses when resolving a data request and mining blocks,
        and are used to encourage fair and trustworthy behaviour throughout the
        network.
      </p>
      <p>
        Regarding WIT's distribution:
      </p>
      <ul>
        <li>
          No more than 2,500,000,000 WITs will ever exist.
        </li>
        <li>
          70% will be mined by witness nodes through block rewards, which
          decrease over time.
        </li>
        <li>
          30% will be minted in the Genesis Block: the first block in the
          chain. These will be assigned to participants in
          the pre-sale conducted in 2017; the Witnet Foundation; and those who
          helped to build Stampery<a class="link" href="#footnote2">
            <sup>2</sup></a
          >)
        </li>
      </ul>
      <p>
        The mining schedule for tokens is as follows: <br />
        The number of WITs generated per block starts at 500 and is set to
        decrease geometrically, with a 50% reduction every 1,750,000 blocks, or
        approximately every 5 years. Each of these periodic reductions is known
        as "halving". As a result, the total number of WITs created by the
        issuance mechanism will never exceed 2,500,000,000 minus the preassigned
        30%. <br />
        Note: these figures are open to debate within the community, and subject
        to change.
      </p>
      <a class="link-main" href="#sum-up">
        <h3 id="sum-up" ref="element" class="section">To sum up</h3>
      </a>
      <a class="link" href="#development-status">
        <h4 id="development-status" ref="element" class="subsection">
          The protocol at the moment: Current development status
        </h4>
      </a>
      <p>
        The Witnet ecosystem is an open source environment that is constantly
        under development. <br />
        Regarding witnet-rust:
      </p>
      <ul>
        <li>
          all the main components are in place—but they need yet to be battle
          tested before mainnet.
        </li>
        <li>
          testnet-4 is live.
          <a class="link" href="https://docs.witnet.io/community/roadmap/">
            Here's the roadmap
          </a>
          and this is
          <a class="link" href="https://docs.witnet.io/try/run-a-node/">
            how to run a node.
          </a>
        </li>
        <li>
          the Witnet community is working hard to make witnet-rust as robust as
          possible
        </li>
      </ul>
      The Ethereum bridge is made up of 3 components:
      <ul>
        <li>
          the UsingWitnet Solidity contract, which Ethereum developers can
          extend : contract MyContract is UsingWitnet { ... }.
        </li>
        <li>
          the Witnet Requests Board - WRB: an Ethereum contract, upon which data
          requests are publicly posted.
        </li>
        <li>
          the bridge component inside
          <a class="link" href="https://github.com/witnet/witnet-rust">
            witnet-rust</a
          >, which monitors the WRB for new requests.
        </li>
      </ul>
      <p>
        For more information about the Witnet Protocol development areas please
        see the
        <a class="link" href="#development">Development section</a>.
      </p>
      <p>
        Contributions are more than welcome, from people who contribute to
        witnet-rust and Sheikah, or from those wanting to connect their Ethereum
        smart contracts to external APIs. <br />
        Just click
        <nuxt-link class="link" to="/#participate">here</nuxt-link>
        to find out how to participate &#128540;
      </p>
      <a class="link" href="#different-from-others">
        <h4 id="different-from-others" class="Subsection14">
          Witnet different from other oracle projects
        </h4>
      </a>
      <p>
        To summarize, up until now most oracle projects have based their
        approach on specialized oracles. Each oracle is connected only to a
        certain set of APIs or protocols, and you must choose which oracle to
        use.
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
        oracle nodes in the network are called <i>witnesses</i>, who function as
        automated nodes that can be hired to retrieve information from the
        Internet and deliver it to smart contracts. Although you can decide how
        many witnesses to employ, you can't choose who they are. Tasks are
        randomly assigned to witnesses in proportion to their
        <a class="link" href="#consensus">reputation</a>. This way, we get rid
        of any conflict of interests, since oracle nodes can't even predict
        which tasks will be assigned to them.
      </p>
      <p>
        The information for any data request is collected from a specified
        public API. At the moment, Witnet does not retrieve data from
        authenticated APIs. Some of the aforementioned specialized oracle
        networks relay on the confidentiality guarantees offered by trusted
        execution environments like Intel SGX. This "enclave" is only available
        on selected hardware, so it's a clear barrier to entry. Moreover, the
        SGX has recently been proven vulnerable to many attacks, including the
        widely known
        <a class="link" href="https://spectreattack.com/spectre.pdf">
          Spectre attack</a
        >. As a result, Witnet focuses on data gathered by public APIs.
      </p>
      <!--
      <p>
        Unlike other Oracles, Witnet data
        request are fully parameterizable through the
        <a class="link" href="#sheikah-radon">RADON</a> language. Not only can the
        number of nodes be specified but also how they aggregate data from
        different sources, filter and achieve consensus among them. More than
        that Witnet allows smart contracts to define their own security
        guarantees by specifying the collateral that needs to be staked by the
        nodes to participate in the report of the data request. This prevents
        many <a class="link" href="#defense-attacks">attack vectors</a>.
      </p>
      -->
      <p>
        Our proposal has a "fairness principle" hard-written into every detail.
        That's the main reason for refusing the use of TEEs or the SGX. Witnet
        gives everyone the possibility to spend the spare CPU and bandwidth of
        their computers (or servers, phones, and even fridges!) fulfilling
        retrieve-attest-deliver tasks and earning rewards in exchange.
      </p>
      <p>
        The Witnet community is open to everyone. Even if you are not a
        developer or node operator, there are
        <a class="link" href="https://docs.witnet.io/developer/contributing/"
          >many things you can do</a
        >
        to spread the word!
      </p>
      <p id="footnote1" class="first-footnote">
        <sup>1</sup> Otherwise, the contracts could have totally different
        output values when executed across all the nodes maintaining the
        blockchain, therefore causing inconsistencies that would lead to
        breaking the network consensus.
      </p>
      <p id="footnote2" class="footnote">
        <sup>2</sup> The Stampery team envisioned the original protocol,
        outlined its foundation in the original whitepaper, and kickstarted
        development.
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
    margin-bottom: 32px;
  }
  .section {
    color: $purple;
    margin-top: 32px;
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
  .first-footnote {
    font-size: 12px;
    border-top: 1px solid #bdbdbd;
    padding-top: 20px;
  }
  .footnote {
    font-size: 12px;
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
