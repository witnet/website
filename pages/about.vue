<template>
  <div class="tab-frame">
    <div class="content">
      <h1 class="title">What is Witnet?</h1>
      <A name="introduction">
        <h2 class="Section1">Introduction</h2>
      </A>
      <p class="p1">
        Witnet is a decentralized oracle network (DON) that connects smart
        contracts to the outer world. Generally speaking, it allows any piece of
        software to retrieve the contents published at any web address at a
        certain point in time, with complete and verifiable proof of its
        integrity and without blindly trusting any third party.
      </p>
      <p class="p2">
        In other words, the Witnet protocol allows a network of computers to act
        as a "decentralized oracle" that retrieves, attests and delivers
        information to smart contracts without having to place trust in a single
        entity.
      </p>
      <p class="p3">Wait, what? Ok, lets go one step at a time.</p>
      <h3 class="Subsection1">Smart Contracts Are Not What You Were Told</h3>
      <p class="p4">
        Over the last years, blockchain technology has promised to revolutionize
        business by allowing creation of "smart contracts" that, unlike paper
        contracts, are impossible to breach.
      </p>
      <p class="p5">
        Actually, those smart contracts are nothing more than small programs
        that can be run in a trustless manner. That is: once they are created,
        no one can stop them from doing exactly what they were created for. They
        just obey their own source code, and censorship is just impossible.
      </p>
      <p class="p6">
        This is a really powerful idea. If you can write a smart contract that:
      </p>
      <p class="p7">
        1. implements the logic of an agreement, and <br />
        2. can execute the clauses of the contract on its own (like paying Alice
        or Bob depending on the outcome of some event),
      </p>
      <p class="p8">
        then you have a contract that is capable of enforcing itself and leaves
        no room for contestation. Boom &#x1F4A3;.
      </p>
      <h3 class="Subsection2">Blockchain Oracles, And Their Problem</h3>

      <p class="p9">
        Given that smart contracts need to be completely
        <a href="#comentario">deterministic</a>, they do not support input of
        data from non-deterministic sources such as APIs or websites.
      </p>
      <p class="p10">
        As a result, smart contracts are mostly isolated from the rest of the
        Internet, which dramatically reduces their transformative potential. At
        the end of the day, the output of a program does not depend solely on
        its source code, but also on the input data it operates upon.
      </p>
      <p class="p11">
        Of course, as the creator of a smart contract, you can create a method
        that allows you and only you to act as an "oracle" by introducing
        information from the outside at will. But you would be completely
        breaking the trustless nature of a smart contract. If trust is put in a
        single entity, there you have a single point of failure that can easily
        be hacked or corrupted.
      </p>
      <p class="p12">
        Smart contracts connected to the real world will not be completely
        trustless and will not release their full potential until we have ways
        to feed them information trustlessly.
      </p>
      <p class="p13">This is often called <i>"the oracle problem"</i>.</p>
      <h3 class="Subsection3">The Solution: A Decentralized Oracle Network</h3>
      <p class="p14">
        The Witnet protocol aims to create an overlay network that connects
        smart contracts to any online data source. Sport results, stock prices,
        weather forecasts or even other blockchains can be easily queried
        (preferably through APIs).
      </p>
      <ul class="p14">
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
      <p class="p15">
        In other words, the Witnet Protocol is Decentralized Oracle Network, a
        peer-to-peer (P2P) network capable of processing
        <a href="rad">Retrieve-Attest-Deliver</a> requests.
      </p>
      <p class="p16">
        You can find a deeper explanation of the DON in this
        <a
          href="https://medium.com/witnet/designing-a-decentralized-oracle-network-cad5c5855ba2"
          >post</a
        >.
      </p>
      <p class="p17">
        The bottom line is that a considerable number of randomly selected,
        anonymous peers retrieving information from one or more sources can
        converge into a single truth about the data they retrieved if a majority
        of them are incentivized to report the retrieved data honestly and they
        apply a common consensus algorithm that resolves inconsistencies.
      </p>
      <p class="p18">
        This Decentralized Oracle Network (DON) maintains and distributes a
        blockchain data structure that serves as a common ledger for the
        operation of the protocol as well as for the WIT token, which is central
        to incentivizing the network players to abide by the protocol and make
        them liable for any misbehavior. Witnesses are also in charge of
        validating transactions in the network and bundling them into blocks
        that get appended to the blockchain periodically.
      </p>
      <p class="p19">
        The process by which witnesses retrieve, attest and deliver data in
        behalf of the smart contracts is in some way similar to mining in other
        blockchains. However, fulfilling these tasks and collecting the rewards
        is not that expensive in terms of computation.
      </p>
      <p class="p20">
        The protocol has been conceived to ensure utmost decentralization and
        fairnes, so each witness' weight in the network is not aligned to their
        computing power. Instead, the probability for every witness to be
        assigned tasks or mine new blocks is directly proportional to their past
        performance in terms of honesty: their reputation.
      </p>
      <p class="p21">
        TIP: Of course, the so-called miners are not actual human beings sitting
        in front of a computer, fulfilling assignments coming from an Internet
        overlord that commands them to use their web browser to navigate to a
        certain website and take a snapshot or copy some text that they must
        report. Indeed, the miners are just computers running a software
        (Witnet-rust) that automatically receive and execute a series of tasks
        without the owner of the computer having to actively do anything else
        than installing it.
      </p>
      <h3 class="Subsection4">100% Truth, 0% Trust</h3>
      <p class="p22">
        Data retrieved, attested and delivered using the Witnet protocol is
        reliable not because of authority but because it comes from anonymous
        snodes who are incentivized to remain honest and to compete for rewards.
      </p>
      <p class="p23">
        In addition, integrity of this data is guaranteed by a consensus
        algorithm that detects fraudsters, who are immediately punished.
      </p>
      <p class="p24">
        The progressive <a href="#consensus">reputation protocol</a> plays a
        central role in maintaining every participant active and honest by
        creating short, middle and long term incentives for them to abide by the
        protocol and not to tamper with the data they broker.
      </p>
      <p class="p25">
        INFO: <br />
        Please note that Witnet's aim is not spotting fake data, but
        guaranteeing a 1:1 match between what is published online—regardless of
        its truthness—and the data that is eventually delivered the smart
        contracts.
      </p>
      <h2 class="Section2">Flow of the protocol</h2>
      <A name="witnet as a blockchain">
        <h3 class="Subection5">Witnet as a blockchain</h3>
      </A>
      <p class="p27">
        The Witnet Protocol runs on its own blockchain with a native token
        called WIT. Having it’s own blockchain guarantees that the fate of
        Witnet is not tied to any other Blockchain, making Witnet much more
        independent and smart contract platform agnostic.
      </p>
      <p class="p28">
        Other projects rely heavily on ERC-20 tokens in the Ethereum blockchain
        to incentivize oracles to resolve tasks. This fact will hinder their
        viability until Ethereum’s scalability challenges are solved or they
        accept alternative means of payment.
      </p>
      <p class="p29">
        In addition, the main key of Witnet is the
        <a href="#consensus">reputation system</a>. Such a mechanism would not
        only be hard but also expensive to implement in other smart contract
        platforms. And finally and more important, mining rewards subsidize the
        data request costs at the initial stage of the protocol.
      </p>
      <p class="p30">
        The nodes of the P2P network are called <i>witnesses</i>, and are
        incentivice by the WIT token to:
      </p>
      <ul class="p31">
        <li>
          a computer network made up of nodes (computers running a specific
          <a href="#rad">Retrive, Attest and Deliver</a>
          data from a data request
        </li>
        <li>
          <a href="#miners">Mine</a> a block to be added in the blockchain
        </li>
        <li>
          Be a <a href="#bridges">bridge-node</a> and connect the Witnet
          protocol to a Smart-contract platform, for example Ethereum
        </li>
      </ul>
      <p class="p32">
        Because the Witnet blockchain is free, open, and neutral, [you can run
        your own node](https://witnet.github.io/documentation/try/run-a-node/)
        and mine blocks on the Witnet blockchain. Every node maintains the
        history of all the transactions on the blockchain.
      </p>
      <A name="rad">
        <h3 class="Subection6">Retrieve-Attest-Deliver</h3>
        Once a Data Request is published, some nodes are selected (by Reputation
        system proof of elegibility, see the <a href="#consensus">Consensus</a>
        section for more details), to retrieve the data from the APIs specified
        in the DR, attest the result and deliver it. Meaning by this,
      </A>
      <ul class="p34">
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
      <p class="p35">
        <a href="https://docs.witnet.io/protocol/data-requests/radon/encoding/"
          >Radon</a
        >
        is a declarative language in charge of coordinating retrieval,
        aggregation, tally and delivery of data strictly as specified in the
        requests. More details about the data requests can be found
        <a href="#radon">here</a>.
      </p>
      <p class="p36">
        Each witness sends the hash of the claim as a commitment, the actual
        claim will be publish when the rest of the designated witnesses have
        also made their own commitments.
      </p>
      <p class="p37">
        The flow, given three APIs and two nodes resolving the data reques, is
        symbolize in the next figure:
      </p>
      <A name="miners">
        <h3 class="Subection7">Miners</h3>
      </A>
      <p class="p38">
        As in any blockchain, the miners are nodes in charge of adding blocks to
        the blockchain. These nodes are selected by the Proof of Elegibility,
        described <a href="#consensus">here</a>. Due to the
        <a href="#consensus">Reputation system</a>, the barries to entry are
        lower than in other Oracles since new nodes do not need to stake a
        significant monetary amount nor invest in expensive hardware to become
        eligible to resolve data requests or mining. This fact incentives new
        nodes to join the network and thus helps the decentralization.
      </p>
      <A name="bridges">
        <h3 class="Subection8">Bridges</h3>
      </A>
      <p class="p39">
        The bridge nodes are the ones in charge to interact between Witnet and
        an external public Blockchain.
      </p>
      <p class="p40">
        So far the Witnet Protocol is been developed to interact with smart
        contracts in Ethereum. These are able to send data requests to the
        Witnet network and get the responses back thanks to the bridge nodes
        that make Witnet act as a sidechain of Ethereum. For now the bridging
        contracts are only deploy in Rinkeby and Görli networks. Client smart
        contracts only need to interact with the Witnet Bridge Interface (WBI)
        for which the addresses can be found below:
      </p>
      <ul class="p41">
        <li><b>Rinkeby</b> 0xf0C67374D08e72dd7424982F76870AE0D6F2055e</li>
        <li><b>Görli</b> 0x1053c33f1DcFF9c8F6F6DC07e3F8cb84e46232A1</li>
      </ul>
      <p class="p42">
        Although for now Witnet interacts with Ethereum, it will actually be
        available to interact with Bitcoin or any other public blockchain.
      </p>
      <p class="p43">
        Bridge nodes are explained in more detail in this article from our
        <a href="https://medium.com/witnet/ethereum-loves-witnet-9a3fd21e6f5c"
          >blog</a
        >.
      </p>
      <A name="consensus">
        <h2 class="Section3">Consensus</h2>
      </A>
      <p class="p44">
        The consensus mechanism is based on a reputation system. Instead of a
        <b>Proof of Work</b> (PoW) or <b>Proof of Stake</b> (PoS), a node is
        probabilistically chosen depending on the *good reputation* it has
        achieved resolving Data Requests. This way any node has a chance to earn
        WITs, and it does not depend on how much stake it has and nither on its
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
          href="https://medium.com/witnet/cryptographic-sortition-in-blockchains-the-importance-of-vrfs-ad5c20a4e018"
          >here</a
        >.
      </p>
      <p class="p45">
        As described in the
        <a href="https://witnet.io/static/witnet-whitepaper.pdf">Whitpaper</a>,
        a node <MATH>M_i</MATH> in epoch *t* is ellected, so it will later
        publish the PoE and it will finally mine the block (resolve a DR or
        whatever it needs to do) depending on the reputation with respect to the
        rest of the nodes that have been selected, if the following condition is
        satisfied:
      </p>
      <vue-mathjax :formula="formula1" />
      <ul class="p47">
        <li>
          $rand(t)$ is a public randomness that can be extracted from the
          blockchain at epoch $t$,
        </li>
        <li>
          $t||rand(t)_{M_i}$ is a signature of message $t||rand(t)$ produced
          with private key $M_i$,
        </li>
        <li>
          $H$ is a deterministic, uniform and non-reversible hash function,
        </li>
        <li>
          $L$ is the number of bits of the output size of the $H$ hash function,
        </li>
        <li>
          $I_i^t$is the reputation of participant $M_i$ at epoch $t$, calculated
          as <br />
          $$I_i^t=\frac{r_i^t}{R^t},$$ <br />
          being $r_i^t$ the reputation of $M_i$ at epoch $t$ and $R^t$ the total
          reputation at the same epoch.
        </li>
      </ul>
      <p class="p48">
        To clarify and have more details abot the reputation system, you can
        take a look to
        <a href="https://witnet.io/static/witnet-whitepaper.pdf"
          >sections 4 and 5 of the Whitepaper</a
        >.
      </p>
      <A name="defense attacks">
        <h3 class="Subection9">Defense over Attacks</h3>
      </A>
      <p class="p49">
        The most frequent attacks in blockchains have been strongly analized in
        the last years for the cases of PoW and PoS consensus, but how does a
        reputation system based blockchain defends over these attacks? In our
        <a href="https://medium.com/witnet">blog in Medium</a> you can find
        specific explanations of how Witnet defends over attacks, but these are
        in short the main ideas:
      </p>
      <ul class="p50">
        <li>
          <b>Sybil attacks</b>: The reputation system works very well against
          this attack since the proposed network is designed to not depend in
          any way on the number of participants in the network. In addition to
          the above, the Collateral makes the attack much more expensive.
        </li>
        <li>
          <b>Eclipse attacks</b>: In order to avoid an attacker getting
          monopolized all the connections of a node it has been implemented a
          P2P bucketing system. More details can be found in the
          <a
            href="https://medium.com/witnet/the-p2p-bucketing-system-in-witnet-d893dce4b8c5"
            >post in Medium</a
          >.
        </li>
        <li>
          <b>Bribery attacks</b>: The implementation of a Collateral fee highly
          increases the Bribe to pay, for more informations take a look to the
          <a
            href="https://medium.com/witnet/deterring-bribery-attacks-on-decentralized-oracle-networks-5bcf87d2cb22"
            >post</a
          >.
        </li>
        <li>
          <b>Majority attacks</b>: The implementation of Witnet garantees that
          in order to perform a Majority attack the attacker would need to hold
          51% of the total reputation.
        </li>
        <li>
          <b>DDoS attacks</b>: Witnet implements Dandelion to obfuscate the
          relation between IPs and Public keys.
        </li>
      </ul>
      <h2 class="Section4">Development</h2>
      <p class="p51">
        Ok, but how is Witnet built? <br />
        The Witnet Ecosystem consists of serveral parts and so it has different
        development areas. Some of them are:
      </p>
      <ul class="p52">
        <li>
          Sheikah and Radon, for Data requests
        </li>
        <li>
          Rust, for nodes in the Network
        </li>
        <li>
          Smart contract lenguages
        </li>
      </ul>
      <p class="p53">
        Let's explain each of them.
      </p>
      <A href="radon">
        <h3 class="Subsection10">Sheikah and Radon</h3>
      </A>
      <p class="p53">
        Creating Data Requests is one of the main actions in Witnet, as when
        they are published the hole Oracle protocol takes place, so how do you
        create them? First we need to talk about Sheikah. Sheikah is a Witnet
        compatible desktop wallet, data requests and smart contracts development
        environment. It can be thought as a friendly user wallet in which you
        can easely create data requests (DR). To create one a user can then
        directly go to Sheikah and easily customize a template of a DR or just
        create a new one, as the Sheikah desktop app is intended to be used as
        an IDE for visually and safely composing and testing Witnet data
        requests.
      </p>
      <p class="p54">
        The development of Sheikah can be followed in the
        <a href="https://github.com/witnet/sheikah">github repository</a>. Here
        you can find instructions for installing and testing Sheikah.
      </p>
      <p class="p55">
        As explained in the <a href="#introduction">Introduction</a>, the Witnet
        protocol resolves the oracle problem since connects smart contracts to
        the real world, but how does Witnet read the data collected by the
        witnesses? Here is where the RAD Engine comes out.
      </p>
      <p class="p56">
        The RAD Engine is the component in charge of processing data requests
        coming from Witnet clients. That is, coordinating retrieval,
        aggregation, tally and delivery of data strictly as specified in the
        requests. All data requests contain explicit instructions on what the
        RAD Engine must do during every stage. These instructions, specified
        using RAD Object Notation (RADON), are interpreted by the RAD Engine.
        More information about RADON and data requests can be found
        <a
          href="https://github.com/witnet/documentation/tree/master/docs/protocol/data-requests"
          >here</a
        >.
      </p>
      <p class="p57">
        Summarizing, Witnet Data Request are fully parameterizable through the
        RADON language. Not only the number of nodes can be specified but also
        how they aggregate Data from different sources, filter and achive
        consensus among them. More than that Witnet allows smart contracts to
        define their own security guarantees by specifiying the collateral that
        needs to be staked by the nodes to participate in the report of the Data
        Request.
      </p>
      <p class="p58">
        You can check what a Witnet data request looks like in this
        <a
          href="https://witnet.github.io/documentation/protocol/data-requests/examples/"
          >example</a
        >.
      </p>
      <h3 class="Subsection11">Rust</h3>
      <p class="p59">
        Another point of discussion was which lenguage we should use to build
        the nodes. Having its own underlying blockchain, Witnet requires code
        that is as fast as C or C++ but memory safe to prevent security
        vulnerabilities. At the same time, we want to produce concurrent code
        that can take advantage of modern hardware.
      </p>
      <p class="p60">
        After analyzing the possible languages to use, we decided to use Rust,
        some of the reasons were:
      </p>
      <ul class="p61">
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
      <p class="p62">
        The details about the choice of Rust can be found in the
        <a href="https://docs.witnet.io/get-started/why-rust/">Documentation</a
        >.
      </p>
      <p class="p63">
        Once Rust was clear, we ceated Witnet-rust, an open-source
        implementation of the Witnet protocol written in Rust. It is a native
        app providing "full node" functionality of the Witnet Decentralized
        Oracle Network protocol.
      </p>
      <p class="p64">
        There are intstallation guides to run a node for several operator
        systems. You can find them <a href="https://docs.witnet.io/">here</a>.
      </p>
      <h3 class="Subsection12">Smart contracts</h3>
      <p class="p65">
        As Witnet is a decentralize oracle for smart contracts, the bridge nodes
        need to able to understand and interact with each smart contract
        lenguage is needed. As explained in the
        <a href="#bridges">Bridges section</a>, for now it has only been
        implemented a bridge with Ethereum wherefore it has been created a
        Witenet-Bridge contract in Solidity. <br />
        A guide for writing a Solidity contract that deploys a Witnet request
        can be found
        <a href="https://witnet.github.io/documentation/try/use-from-ethereum/"
          >here</a
        >.
      </p>
      <h2 class="Section5">WIT token</h2>
      <p class="p66">
        As mentioned in
        <a href="#witnet as a blockchain">Witnet as blockchain</a>, Witnet runs
        its own Blockchain and has a native token called WIT. The Wits are
        earned by the witnesses when resolving a data request, and are used to
        encourages fair and trustworthy behaviour in the network.
      </p>
      <p class="p67">
        Some information about the distribution of the WITs is the following:
      </p>
      <ul class="p68">
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
        </li>
        <li>
          20% to Witnet Foundation for development, research and engineering
          grants, community building and marketing actions; as well as rewarding
          previous Stampery investors.
        </li>
        <li>
          10% to Republic investors (max. $1.07M) and a separate private sale
          limited to accredited investors (max. $28.93M).
        </li>
      </ul>
      <p class="p69">
        The 70% that will be distributed through mining has the following
        structure: <br />
        The number of WITs generated per block starts at 500 and is set to
        decrease geometrically, with a 50% reduction every 1,750,000 blocks, or
        approximately 5 years. Each of these periodic reductions is known as
        halving. The result is that the number of WITs ever created by the
        issuance mechanism will never exceed 2,500,000,000 minus the 30% that
        has already been preassigned. This is represented in the next figure.
      </p>
      <h2 class="Section6">To sum up</h2>
      <h3 class="Subection13">
        The protocol at the moment (Current development status)
      </h3>
      <p class="p70">
        UNDER CONTRSTUCTION
      </p>
      <h3 class="Subsection14">
        Witnet different from other oracle projects
      </h3>
      <p class="p71">
        To sum up, until this moment most oracle projects base their approach on
        specialized oracles. Each oracle is connected only to a certain set of
        APIs or protocols, and you must choose which oracle to use.
      </p>
      <p class="p72">
        From our perspective, specialized oracles are:
      </p>
      <ul class="p73">
        <li>
          likely to have conflicts of interest,
        </li>
        <li>
          scarce and thus rather centralized as too much trust is put on each of
          them,
        </li>
        <li>
          trivially predictable and thus easily targetable by DoS attacks.
        </li>
        <li>
          in the case of needing human intervention, slow to resolve.
        </li>
      </ul>
      <p class="p74">
        Witnet approach is instead based on the most generalized form of
        oracles.They perform "retrieve-attest-deliver" tasks without distinction
        between the sources they query. In Witnet, the oracle nodes in the
        network are called "witnesses". They are automated nodes that you can
        hire to retrieve information from the Internet and deliver it to you or
        your smart contracts. Although you can decide how many witnesses to
        employ, the most important fact is that you can't choose who they are.
        Tasks are randomly assigned to witnesses in proportion to their
        reputation. This way, we get rid of any conflict of interests, given
        that oracle nodes can't even predict which tasks will be assigned to
        them.
      </p>
      <p class="p75">
        The information for any Data Request is collected from any public API
        specified in it. At the current stage of the protocol Witnet does not
        retrieve data from authenticated APIs. Some of the aforementioned
        specialized oracle networks relay on the confidentiality guarantees
        offered by trusted execution environments like Intel SGX. This "enclave"
        is only available on selected hardware, so it's a clear barrier to
        entry. Moreover, the SGX has recently been proven vulnerable to many
        attacks, including the widely known
        <a href="https://spectreattack.com/spectre.pdf">Spectre attack</a>.
        Those are the main reasons why Witnet focuses on data gathered by public
        APIs.
      </p>
      <p class="p76">
        A big difference with respect to other Oracles is that Witnet Data
        Request are fully parameterizable through the
        <a href="#radon">RADON</a> language. Not only the number of nodes can be
        specified but also how they aggregate Data from different sources,
        filter and achive consensus among them. More than that Witnet allows
        smart contracts to define their own security guarantees by specifiying
        the collateral that needs to be staked by the nodes to participate in
        the report of the Data Request. This prevents many
        <a href="#defense attacks">attack vectors</a>.
      </p>
      <p class="p77">
        In summary, our proposal has a "fairness principle" hard-written into
        every detail. That's the main reason for refusing the use of TEEs or the
        SGX. We want to give everyone the possibility to spend the spare CPU and
        bandwidth of their computers (or servers, or phones, or even fridges!)
        fulfilling retrieve-attest-deliver tasks and earning rewards in
        exchange.
      </p>
      <p class="p78">
        The Witnet community is open to everyone. Even if you are not a
        developer or node operator, there are
        <a href="https://witnet.github.io/documentation/community/contributing/"
          >many things you can do</a
        >
        to spread the word!
      </p>
      <A name="comentario">
        <p class="p79">
          [^1]: Otherwise, the contracts could have totally different output
          values when executed across all the nodes maintaining the blockchain,
          therefore causing inconsistencies that would lead to breaking the
          network consensus.
        </p>
      </A>
    </div>
  </div>
</template>
<script>
<<<<<<< HEAD
import { VueMathjax } from 'vue-mathjax'
export default {
  components: {
    'vue-mathjax': VueMathjax,
  },
  data() {
    return {
      formula1: '$$H(<t||rand(t)_{M_i}>)/2^L \\leq I_i^t$$',
=======
export default {
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
>>>>>>> implement suggestions
    }
  },
}
</script>

<style scoped lang="scss">
@import '@/styles/colors.scss';

.content {
  color: rgb(61, 61, 61);
  line-height: 25px;
  width: 50%;
  margin-top: 5vw;
  margin-left: 5vw;
  .title {
    color: $purple;
  }
}
@media screen and (max-width: 1200px) {
  .content {
    width: 80%;
  }
}
</style>
