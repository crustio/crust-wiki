---
id: democracyGuide
title: Democracy Guide
sidebar_label: Democracy Guide
---

The Democracy module is an important part of Crust Network, reflecting the advantages of Crust on-chain governance and degree of decentralization. Since the design of the Democracy module is modelled after the British parliamentary system that by nature contains many aspects, this tutorial mainly focuses on the main processes, specific practices, rules, and parameters of the Democracy module for the ease of reading.



## Process of Democracy module

### Main processes
1. Create a preimage to decide on the code for execution with a request for voting;
2. Create and submit a proposal;
3. Review proposals from others or wait for the proposal to be reviewed;
4. At the end of each Lanuch cycle, the proposal with the highest number of review votes will be selected into the voting stage, and the proposals that pass the voting stage will move on to the execution stage.
5. A timer will be set for the execution of the approved proposals according to the chain parameters.



## Practices
1. Create a preimage
![democracy_entry_page](assets/democracy/democracy_entry_page.jpeg)
As shown above, go to the Democracy page and then click on "Submit preimage".
![submit_preimage](assets/democracy/submit_preimage.png)
You can select any transaction that can be executed by the Sudo permission, such as taking.SetValidatorCount, in the transaction submission page. Creating a preimage requires a small number of CRUs, whose amount depends on the selected transaction.
![democracy_entry_page](assets/democracy/democracy_entry_page.jpeg)
After the transaction is submitted, you can go to the event page and check the hash value of the newly created preimage and copy that value as does in the above page.

2. Create and submit a proposal
  The hash value of the previously generated preimage can be submitted by clicking on the "Submit proposal" button.

  ![submit_proposal](assets/democracy/submit_proposal.png)

3. Review proposals from others or wait for the proposal to be reviewed 
  Once a proposal has been created, you can see all the proposals currently in progress in the proposal list. Any token holder can select the proposal he or she is interested in to review. Reviewing proposal requires a sum of CRUs, which cannot be used for other purposes such as staking. At the end of each proposal cycle, the proposal with the highest number of review votes will proceed to the voting stage.
  ![second_proposal](assets/democracy/second_proposal.png)

4. Voting stage
  The proposal that enters the voting stage will be as shown in the page below. Again, any token-holding user can choose to support the proposal or reject it. Whether the proposal will be approved or rejected can be viewed on this current page as well.
  ![voting_button](assets/democracy/voting_button.jpeg)
  There is much freedom for users to express their will in supporting or rejecting the proposal. Users can choose to lock more CRUs or decide on a longer locking time to express a stronger inclination of approval or rejection. By choosing a higher locking multiplier, users can make the locking more effective. It is noteworthy that locked-in CRUs in this stage can be used for staking. Specifications on voting formula and lock-up time will be explained in detail in subsequent parameter description.
  ![voting_detail](assets/democracy/voting_detail.png)

5. Execution stage
  At the end of the voting period for each proposal, the proposal that has passed the vote will enter the execution stage. Depending on the type of proposal, execution is divided into immediate execution and deferred execution. The proposal described earlier in this document will be executed in a deferred manner by default. Detailed execution time can be found on the following page.

  ![scheduled](assets/democracy/scheduled.png)

  

## Rules, parameters and notices

1. The created preimage needs to be a transaction that can be executed by Root permission, such as taking.SetValidatorCount or market.setPunishment. Otherwise,  the execution will eventually fail even if it enters the stage.
2. Both the proposal submission and the proposal review will require a certain number of CRUs to be staked. The amount set on the preview web is **10 CRUs**. The locked-in CRUs will be automatically unlocked once the proposal enters the voting stage. However, it should be noted that the locked CRUs cannot be unlocked for proposals up for review at the same time, and only the proposal that ultimately makes into the voting stage will see CRUs unlocked. On the preview web, **every 7 days** the proposal with the highest number of review votes will be selected into the voting stage.

3. Proposals in the voting stage have **7 days** to be decided on approval or rejection. The number of locked-in CRUs will be converted to valid votes in relation to the length of locking time. For example, by default CRUs will only be locked in until the end of the voting period, with the number of valid votes equal to one-tenth of the locked-in CRU amount. Further, the number of valid votes is equal to twice the locked amount with twice the locking time (8 days * 2). The voting on ordinary proposals is calculated using a majority approval mechanism, which is related to the total voting amount, the number of valid approval votes, the number of valid rejection votes, and the total amount of network circulation: ``The number of valid rejection votes / sqrt(total voting amount) < the number of valid approval votes / sqrt(total amount of network circulation)``.

4. The deferred time duration is **8 days** on the preview web.

   

## Advanced process of democracy module
### Proxy voting mechanism
Comming soon
### External proposals
Comming soon

### Tipping mechanism
Comming soon

### Bounty mechanism
Comming soon

### Parliamentary system and participation
Comming soon

### Technical Committee System
Comming Soon