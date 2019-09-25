# What is Witnet?

## Introduction

Witnet is a decentralized oracle network (DON) that connects smart contracts to the outer world. Generally speaking, it allows any piece of software to retrieve the contents published at any web address at a certain point in time, with complete and verifiable proof of its integrity and without blindly trusting any third party.

In other words, the Witnet protocol allows a network of computers to act as a "decentralized oracle" that retrieves, attests and delivers information to smart contracts without
having to place trust in a single entity.

Wait, what? Ok, lets go one step at a time.

#### Smart Contracts Are Not What You Were Told

Over the last years, blockchain technology has promised to revolutionize
business by allowing creation of "smart contracts" that, unlike paper
contracts, are impossible to breach.

Actually, those smart contracts are nothing more than small programs
that can be run in a trustless manner. That is: once they are created,
no one can stop them from doing exactly what they were created for. They
just obey their own source code, and censorship is just impossible.

This is a really powerful idea. If you can write a smart contract that:

1. implements the logic of an agreement, and
2. can execute the clauses of the contract on its own (like paying Alice or Bob depending on the outcome of some event),

then you have a contract that is capable of enforcing itself and leaves
no room for contestation. Boom :bomb:.

#### Blockchain Oracles, And Their Problem

Given that smart contracts need to be completely deterministic[^1], they
do not support input of data from non-deterministic sources such as APIs
or websites.

As a result, smart contracts are mostly isolated from the rest of the
Internet, which dramatically reduces their transformative potential. At
the end of the day, the output of a program does not depend solely on
its source code, but also on the input data it operates upon.

Of course, as the creator of a smart contract, you can create a method
that allows you and only you to act as an "oracle" by introducing
information from the outside at will. But you would be completely
breaking the trustless nature of a smart contract. If trust is put in a
single entity, there you have a single point of failure that can easily
be hacked or corrupted.

Smart contracts connected to the real world will not be completely
trustless and will not release their full potential until we have ways
to feed them information trustlessly.

This is often called _"the oracle problem"_. 

### The Solution: A Decentralized Oracle Network

The Witnet protocol aims to create an overlay network that connects
smart contracts to any online data source. Sport results, stock prices,
weather forecasts or even other blockchains can be easily queried
(preferably through APIs).

The protocol describes a distributed network of  peer nodes—which we fondly call _witnesses_— earn WIT tokens as a reward for retrieving web data and reporting it directly to the smart contracts. That is, a Decentralized Oracle Network.
More precisely, we outline a Decentralized Oracle Network (DON) as:
• a computer network made up of nodes (computers running a specific software),
• which communicate and operate as peers in compliance with an agreed protocol,
• to acquire knowledge of information that is external to the network,
• verify and agree on the veracity of the acquired information,
• and supply such verified information to other applications or networks that may need it.



In other words, the Witnet Protocol is  Decentralized Oracle Network, a peer-to-peer (P2P) network capable of
processing Retrieve-Attest-Deliver requests.

You can find a deeper explanation of the DON in this [post](https://medium.com/witnet/designing-a-decentralized-oracle-network-cad5c5855ba2).


The bottom line is that a considerable number of randomly selected,
anonymous peers retrieving information from one or more sources can
converge into a single truth about the data they retrieved if a majority
of them are incentivized to report the retrieved data honestly and they
apply a common consensus algorithm that resolves inconsistencies.

This Decentralized Oracle Network (DON) maintains and distributes a
blockchain data structure that serves as a common ledger for the
operation of the protocol as well as for the WIT token, which is central
to incentivizing the network players to abide by the protocol and make
them liable for any misbehavior. Witnesses are also in charge of
validating transactions in the network and bundling them into blocks
that get appended to the blockchain periodically.

The process by which witnesses retrieve, attest and deliver data in
behalf of the smart contracts is in some way similar to mining in other
blockchains. However, fulfilling these tasks and collecting the rewards
is not that expensive in terms of computation.

The protocol has been conceived to ensure utmost decentralization and
fairnes, so each witness' weight in the network is not aligned to their
computing power. Instead, the probability for every witness to be
assigned tasks or mine new blocks is directly proportional to their past
performance in terms of honesty: their reputation.

!!! tip
    Of course, the so-called miners are not actual human beings sitting
    in front of a computer, fulfilling assignments coming from an
    Internet overlord that commands them to use their web browser to
    navigate to a certain website and take a snapshot or copy some text
    that they must report.
    Indeed, the miners are just computers running a software
    (Witnet-rust) that automatically receive and execute a series of
    tasks without the owner of the computer having to actively do
    anything else than installing it.

### 100% Truth, 0% Trust

Data retrieved, attested and delivered using the Witnet protocol is
reliable not because of authority but because it comes from anonymous
nodes who are incentivized to remain honest and to compete for rewards.

In addition, integrity of this data is guaranteed by a consensus
algorithm that detects fraudsters, who are immediately punished.

The progressive [reputation protocol](##Consensus) plays a central role in
maintaining every participant active and honest by creating short,
middle and long term incentives for them to abide by the protocol and
not to tamper with the data they broker.

!!! info
    Please note that Witnet's aim is not spotting fake data, but
    guaranteeing a 1:1 match between what is published online—regardless
    of its truthness—and the data that is eventually delivered the smart
    contracts.

[^1]: Otherwise, the contracts could have totally different output
values when executed across all the nodes maintaining the blockchain,
therefore causing inconsistencies that would lead to breaking the
network consensus.

## Flow of the protocol

### Witnet as a blockchain
The Witnet Protocol runs on its own blockchain with a native token called WIT.
Having it’s own blockchain guarantees that the fate of Witnet is not tied to any other Blockchain, making Witnet much more independent and smart contract platform agnostic. 

Other projects rely heavily on ERC-20 tokens in the Ethereum blockchain to incentivize oracles to resolve tasks. This fact will hinder their viability until Ethereum’s scalability challenges are solved or they accept alternative means of payment.

In addition, the main key of Witnet is the [reputation system](###Reputation-System). Such a mechanism would not only be hard but also expensive to implement in other smart contract platforms. And finally and more important, mining rewards subsidize the data request costs at the initial stage of the protocol.

The nodes of the P2P network are called _witnesses_, and are incentivice by the WIT token to:

- [Retrive, Attest and Deliver](###Retrive-Attest-Deliver) data from a data request
- [Mine](###Miners) a block to be added in the blockchain
- Be a [bridge-node](###Bridges) and connect the Witnet protocol to a Smart-contract platform, for example Ethereum


![](https://i.imgur.com/xEdTFyO.png)

Because the Witnet blockchain is free, open, and neutral, [you can run your own node](https://witnet.github.io/documentation/try/run-a-node/) and mine blocks on the Witnet blockchain. Every node maintains the history of all the transactions on the blockchain.




### Retrieve-Attest-Deliver

Once a Data Request is published, some nodes are selected (by Reputation system proof of elegibility, see the [Consensus](##Consensus) section for more details), to retrieve the data from the APIs specified in the DR, attest the result and deliver it. Meaning by this,
• Retrieve: to acquire knowledge of information that is external to the network.
• Attest: to verify and agree on the veracity of the retrieved information.
• Deliver: to supply such attested information to the creator of the RAD request.
[Radon](###link a radon documentation)  is a declarative language in charge of coordinating retrieval, aggregation, tally and delivery of data strictly as specified in the requests. More details about the data requests can be found [here](###Sheikah-and-Radon).

Each witness  sends the hash of the claim as a commitment, the actual claim  will be publish when the rest of the designated witnesses have also made their own commitments.



The flow, given three APIs and two nodes resolving the data reques, is symbolize in the next figure:
 


![](https://i.imgur.com/ywnZTra.jpg)

### Miners
As in any blockchain, the miners are nodes in charge of adding blocks to the blockchain. These nodes are selected by the Proof of Elegibility, described [here](###RePoE). Due to the [Reputation system](###Reputation-System), the barries to entry are lower than in other Oracles since new nodes do not need to stake a significant monetary amount nor invest in expensive hardware to become eligible to resolve data requests or mining. This fact incentives new nodes to join the network and thus helps the decentralization.

### Bridges
The bridge nodes are the ones in charge to interact between Witnet and an external public Blockchain.

So far the Witnet Protocol is been developed to interact with smart contracts in Ethereum. These are able to send data requests to the Witnet network and get the responses back thanks to the bridge nodes that make Witnet act as a sidechain of Ethereum. For now the bridging contracts are only deploy in Rinkeby and Görli networks. Client smart contracts only need to interact with the Witnet Bridge Interface (WBI) for which the addresses can be found below:

- **Rinkeby** 0xf0C67374D08e72dd7424982F76870AE0D6F2055e
- **Görli** 0x1053c33f1DcFF9c8F6F6DC07e3F8cb84e46232A1


![](https://i.imgur.com/hYbCI5F.png)

Although for now Witnet interacts with Ethereum, it will actually be available to interact with Bitcoin or any other public blockchain.



Bridge nodes are explained in more detail in this article from our [blog](https://medium.com/witnet/ethereum-loves-witnet-9a3fd21e6f5c).


## Consensus 
The consensus mechanism is based on a reputation system. Instead of a *Proof of Work* (PoW) or *Proof of Stake* (PoS), a node is probabilistically chosen depending on the *good reputation* it has achieved resolving Data Requests. This way any node has a chance to earn WITs, and it does not depend on how much stake it has and nither on its hardware, as it happens for PoW and PoS.
Witnet features a sort of Byzantine Fault Tolerance algorithm. Nodes, through a cryptographic sortition scheme, secretly compute their eligibility for performing tasks (mining, witnessing data requests), i.e., they compute their *Proof of Eligibility* (PoE). Such proof is later verified by the rest of the nodes in the network. Among those block reporters elected, the block proposed by the peer with higher reputation is accepted (if valid). More details about the importance of the Cryptographic sortition can be found [here](https://medium.com/witnet/cryptographic-sortition-in-blockchains-the-importance-of-vrfs-ad5c20a4e018).

As described in the [Whitepaper](https://witnet.io/static/witnet-whitepaper.pdf), a node $M_i$ in epoch *t* is ellected, so it will later publish the PoE and it will finally mine the block (resolve a DR or whatever it needs to do) depending on the reputation with respect to the rest of the nodes that have been selected, if the following condition is satisfied:

<MATH>H(<t||rand(t)_{M_i}>)/2^L \leq I_i^t$$
Where,

- $rand(t)$ is a public randomness that can be extracted from the blockchain at epoch $t$,
- $<t||rand(t)_{M_i}>$ is a signature of message $t||rand(t)$ produced with private key $M_i$,
- $H$ is a deterministic, uniform and non-reversible hash function,
- $L$ is the number of bits of the output size of the $H$ hash function,
- $I_i^t$is the reputation of participant $M_i$ at epoch $t$, calculated as $$I_i^t=\frac{r_i^t}{R^t},$$
being $r_i^t$ the reputation of $M_i$ at epoch $t$ and $R^t$ the total reputation at the same epoch.

To clarify and have more details abot the reputation system, you can take a look to [sections 4 and 5 of the Whitepaper](https://witnet.io/static/witnet-whitepaper.pdf).


### Defense over Attacks

The most frequent attacks in blockchains have been strongly analized in the last years for the cases of PoW and PoS consensus, but how does a reputation system based blockchain defends over these attacks?
In the our [blog in Medium](https://medium.com/witnet) you can find specific explanations of how Witnet defends over attacks, but these are in short the main ideas:
- **Sybil attacks**: The reputation system works very well against this attack since the proposed network is designed to not depend in any way on the number of participants in the network. In addition to the above, the Collateral makes the attack much more expensive.
- **Eclipse attacks**: In order to avoid an attacker getting monopolized all the connections of a node it has been implemented a P2P bucketing system. More details can be found in the [post of Medium](https://medium.com/witnet/the-p2p-bucketing-system-in-witnet-d893dce4b8c5).
- **Bribery attacks**: The implementation of a Collateral fee highly increases the Bribe to pay, for more informations take a look to the [post](https://medium.com/witnet/deterring-bribery-attacks-on-decentralized-oracle-networks-5bcf87d2cb22).
- **Majority attacks**: The implementation of Witnet garantees that in order to perform a Majority attack the attacker would need to hold 51% of the total reputation.
- **DDoS attacks**: Witnet implements Dandelion to obfuscate the relation between IPs and Public keys.
## Development
Ok, but how is Witnet built?
The Witnet Ecosystem consists of serveral parts and so it has different development areas. Some of them are:

- Sheikah and Radon, for Data requests
- Rust, for nodes in the Network
- Smart contract lenguages

Let's explain each of them.

### Sheikah and Radon

Creating Data Requests is one of the main actions in Witnet, as when they are published the hole Oracle protocol takes place, so how do you create them?
First we need to talk about Sheikah. Sheikah is a Witnet compatible desktop wallet, data requests and smart contracts development environment. It can be thought as a friendly user wallet in which you can easely create data requests (DR). 
To create one a user can then directly go to Sheikah and easily customize a template of a DR or just create a new one, as the Sheikah desktop app is intended to be used as an IDE for visually and safely composing and testing Witnet data requests. 

The development of Sheikah can be followed in the github [repository]( https://github.com/witnet/sheikah). Here you can find instructions for installing and testing Sheikah. 

As explained in the [Introduction](##Introduction), the Witnet protocol resolves the oracle problem since connects smart contracts to the real world, but how does Witnet read the data collected by the witnesses? Here is where the RAD Engine comes out.

The RAD Engine is the component in charge of processing data requests coming from Witnet clients. That is, coordinating retrieval, aggregation, tally and delivery of data strictly as specified in the requests.
All data requests contain explicit instructions on what the RAD Engine must do during every stage. These instructions, specified using RAD Object Notation (RADON), are interpreted by the RAD Engine. More information about RADON and data requests can be found here https://github.com/witnet/documentation/tree/master/docs/protocol/data-requests.

Summarizing, Witnet Data Request are fully parameterizable through the RADON language. Not only the number of nodes can be specified but also how they aggregate Data from different sources, filter and achive consensus among them. More than that Witnet allows smart contracts to define their own security guarantees by specifiying the collateral that needs to be staked by the nodes to participate in the report of the Data Request. 

You can check what a Witnet data request looks like in this [example](https://witnet.github.io/documentation/protocol/data-requests/examples/).
### Rust
Another point of discussion was which lenguage we should use to build the nodes.
Having its own underlying blockchain, Witnet requires code that is as fast as C or C++ but memory safe to prevent security vulnerabilities. At the same time, we want to produce concurrent code that can take advantage of modern hardware.

After analyzing the possible languages to use, we decided to use Rust, some of the reasons were:

- Performance
- Memory safety
- Concurrency
- Influence from functional languages
- Statically typed with type inference
- Awesome compiler and tooling
- Metaprogramming
- Thriving community

The details about the choice of Rust can be found in the [Documentation](https://docs.witnet.io/get-started/why-rust/).

Once Rust was clear, we ceated Witnet-rust, an open-source implementation of the Witnet protocol written in Rust. It is a native app providing "full node" functionality of the Witnet Decentralized Oracle Network protocol.

There are intstallation guides to run a node for several operator systems. You can find them [here](https://docs.witnet.io/).


### Smart contracts 

As Witnet is a decentralize oracle for smart contracts, the bridge nodes need to able to understand and interact with each smart contract lenguage is needed. 
As explained in the [Bridges section](####bridge), for now it has only been implemented a bridge with Ethereum wherefore it has been created a Witenet-Bridge contract in Solidity. 
A guide for writing a Solidity contract that deploys a Witnet request con be found [here](https://witnet.github.io/documentation/try/use-from-ethereum/).


## WIT token
As mentioned in [Witnet as blockchain](###Witnet-as-a-blockchain), Witnet runs its own Blockchain and has a native token called WIT. The Wits  are earned by the witnesses when resolving a data request, and are used to encourages fair and trustworthy behaviour in the network.

Some information about the distribution of the WITs is the following:

![](https://i.imgur.com/6giloBm.png)

- No more than 2,500,000,000 WITs will ever exist.
- 70% will be mined by witness nodes through block rewards that will decrease over time.
- 30% will be minted in the early stage block (first block in the chain). These will be assigned as follows:
- 20% to Witnet Foundation for development, research and engineering grants, community building and marketing actions; as well as rewarding previous Stampery investors.
- 10% to Republic investors (max. $1.07M) and a separate private sale limited to accredited investors (max. $28.93M).

The 70% that will be distributed through mining has the following structure:
The number of WITs generated per block starts at 500 and is set to decrease geometrically, with a 50% reduction every 1,750,000 blocks, or approximately 5 years. Each of these periodic reductions is known as halving. The result is that the number of WITs ever created by the issuance mechanism will never exceed 2,500,000,000 minus the 30% that has already been preassigned. This is represented in the next figure.


<p align=center>
<img src="https://i.imgur.com/AKkUp5j.png" width="1200">
</p>
<p align=center>
</p>

## To sum up
### The protocol at the moment (Current development status)
POR COMPLETAR 

### Witnet different from other oracle projects

To sum up, until this moment most oracle projects base their approach on specialized oracles. Each oracle is connected only to a certain set of APIs or protocols, and you must choose which oracle to use.

From our perspective, specialized oracles are:

- likely to have conflicts of interest,
- scarce and thus rather centralized as too much trust is put on each of them,
- trivially predictable and thus easily targetable by DoS attacks.
- in the case of needing human intervention, slow to resolve.


Witnet approach is instead based on the most generalized form of oracles. They perform "retrieve-attest-deliver" tasks without distinction between the sources they query. In Witnet, the oracle nodes in the network are called "witnesses". They are automated nodes that you can hire to retrieve information from the Internet and deliver it to you or your smart contracts. Although you can decide how many witnesses to employ, the most important fact is that you can't choose who they are. Tasks are randomly assigned to witnesses in proportion to their reputation. This way, we get rid of any conflict of interests, given that oracle nodes can't even predict which tasks will be assigned to them.

The information for any Data Request is collected from any public API specified in it. At the current stage of the protocol Witnet does not retrieve data from authenticated APIs. Some of the aforementioned specialized oracle networks relay on the confidentiality guarantees offered by trusted execution environments like Intel SGX. This "enclave" is only available on selected hardware, so it's a clear barrier to entry. Moreover, the SGX has recently been proven vulnerable to many attacks, including the widely known [Spectre attack](https://spectreattack.com/spectre.pdf). Those are the main reasons why Witnet focuses on data gathered by public APIs.

A big difference with respect to other Oracles is that Witnet Data Request are fully parameterizable through the [RADON](###Sheikah-and-Radon) language. Not only the number of nodes can be specified but also how they aggregate Data from different sources, filter and achive consensus among them. More than that Witnet allows smart contracts to define their own security guarantees by specifiying the collateral that needs to be staked by the nodes to participate in the report of the Data Request. This prevents many [attack vectors](##Attacks).

In summary, our proposal has a "fairness principle" hard-written into every detail. That's the main reason for refusing the use of TEEs or the SGX. We want to give everyone the possibility to spend the spare CPU and bandwidth of their computers (or servers, or phones, or even fridges!) fulfilling retrieve-attest-deliver tasks and earning rewards in exchange.

The Witnet community is open to everyone. Even if you are not a developer or node operator, there are [many things you can do](https://witnet.github.io/documentation/community/contributing/) to spread the word!



[whitepaper]: https://witnet.io/static/witnet-whitepaper.pdf
[reputation protocol]: ../protocol/reputation.md
[Stampery]: https://stampery.com
[Witnet Foundation]: https://witnet.foundation
[Aragon]: https://aragon.org
[Trailbot]: https://trailbot.io
[Mongoaudit]: https://mongoaud.it
[Loqui IM]: https://loqui.im
