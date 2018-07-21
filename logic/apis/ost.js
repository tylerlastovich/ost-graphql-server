import OSTSDK from '@ostdotcom/ost-sdk-js';
import {OST_API_KEY, OST_API_SECRET_KEY, OST_API_ENDPOINT} from "../conf";

const ost = new OSTSDK({apiKey: OST_API_KEY, apiSecret: OST_API_SECRET_KEY, apiEndpoint: OST_API_ENDPOINT});

const userService = ost.services.users;
const actionService = ost.services.actions;
const transactionService = ost.services.transactions;
const airdropService = ost.services.airdrops;
const transferService = ost.services.transfers;
const tokenService = ost.services.token;
const balanceService = ost.services.balances;
const ledgerService = ost.services.ledger;

const OstResolver = {
    Query: {
        // List all OST users
        listOstUsers(_, args) {
            return userService.list({
                    page_no: args.page_no,
                    airdropped: args.airdropped,
                    order_by: args.order_by,
                    order: args.order,
                    limit: args.limit,
                    name: args.names
                }).then(response => {
                    let users = response.data.users;
                    let next_page = response.data.meta.next_page_payload;
                    console.log(users);
                    console.log(next_page);
                    return {
                        users: users,
                        next_page_payload: next_page
                    };
                }).catch((e) => {
                    console.log("There was an error listing OST users");
                    console.log("Err", e.err);
                    return e;
                });
        },
        // Returns details on a specific OST user by id
        getOstUser(_, args) {
            return userService.get({id: args.id})
                .then(response => {
                    let user = response.data.user;
                    console.log(user);
                    return user;
                }).catch((e) => {
                    console.log("There was an error getting OST user: " + args.id);
                    console.log("Err", e.err);
                    return e;
                });
        },
        // Lists all OST actions
        listOstActions(_, args) {
            return actionService.list({
                    page_no: args.page_no,
                    airdropped: args.airdropped,
                    order_by: args.order_by,
                    order: args.order,
                    limit: args.limit,
                    name: args.names
                })
                .then(response => {
                    let actions = response.data.actions;
                    let next_page = response.data.meta.next_page_payload;
                    console.log(actions);
                    console.log(next_page);
                    return {
                        actions: actions,
                        next_page_payload: next_page
                    };
                }).catch((e) => {
                    console.log("There was an error listing OST actions");
                    console.log("Err", e.err);
                    return e;
                });
        },
        // Returns details on specific OST action by id
        getOstAction(_, args) {
            return actionService.get({id: args.id})
                .then(response => {
                    let action = response.data.action;
                    console.log(action);
                    return action;
                }).catch((e) => {
                    console.log("There was an error getting OST action: " + args.id);
                    console.log("Err", e.err);
                    return e;
                });
        },
        // Lists all OST transactions
        listOstTransactions(_, args) {
            return transactionService.list({
                    page_no: args.page_no,
                    airdropped: args.airdropped,
                    order_by: args.order_by,
                    order: args.order,
                    limit: args.limit,
                    name: args.names
                }).then(response => {
                    let transactions = response.data.transactions;
                    let next_page = response.data.meta.next_page_payload;
                    console.log(transactions);
                    console.log(next_page);
                    return {
                        transactions: transactions,
                        next_page_payload: next_page
                    };
                }).catch((e) => {
                    console.log("There was an error listing OST transactions");
                    console.log("Err", e.err);
                    return e;
                });
        },
        // Returns details on a specific OST transaction by id
        getOstTransaction(_, args) {
            return transactionService.get({id: args.id})
                .then(response => {
                    let transaction = response.data.transaction;
                    console.log(transaction);
                    return transaction;
                }).catch((e) => {
                    console.log("There was an error getting OST transaction: " + args.id);
                    console.log("Err", e.err);
                    return e;
                });
        },
        // Lists all OST airdrops
        listOstAirdrops(_, args) {
            return airdropService.list({
                    page_no: args.page,
                    limit: args.limit,
                    current_status: args.status
                }).then(response => {
                    let airdrops = response.data.airdrops;
                    let next_page = response.data.meta.next_page_payload;
                    console.log(airdrops);
                    console.log(next_page);
                    return {
                        airdrops: airdrops,
                        next_page_payload: next_page
                    };
                }).catch((e) => {
                    console.log("There was an error listing OST airdrops");
                    console.log("Err", e.err);
                    return e;
                });
        },
        // Returns details on specific OST airdrop by id
        getOstAirdrop(_, args) {
            return airdropService.get({id: args.id})
                .then(response => {
                    let airdrop = response.data.airdrop;
                    console.log(airdrop);
                    return airdrop;
                }).catch((e) => {
                    console.log("There was an error getting OST airdrop: " + args.id);
                    console.log("Err", e.err);
                    return e;
                });
        },
        // Lists all OST transfers
        listOstTransfers(_, args) {
            return transferService.list({
                    page_no: args.page,
                    limit: args.limit,
                    current_status: args.status
                }).then(response => {
                    let airdrops = response.data.airdrops;
                    let next_page = response.data.meta.next_page_payload;
                    console.log(airdrops);
                    console.log(next_page);
                    return {
                        airdrops: airdrops,
                        next_page_payload: next_page
                    };
                }).catch((e) => {
                    console.log("There was an error listing OST airdrops");
                    console.log("Err", e.err);
                    return e;
                });
        },
        // Returns details of specific OST transfers by id
        getOstTransfer(_, args) {
            return transferService.get({id: args.id})
                .then(response => {
                    let airdrop = response.data.airdrop;
                    console.log(airdrop);
                    return airdrop;
                }).catch((e) => {
                    console.log("There was an error getting OST airdrop: " + args.id);
                    console.log("Err", e.err);
                    return e;
                });
        },
        // Returns details on OST token by id
        getOstToken(_, args) {
            return tokenService.get({id: args.id})
                .then(response => {
                    let token = response.data.token;
                    token.price_points = response.data.price_points;
                    console.log(token);
                    return token;
                }).catch((e) => {
                    console.log("There was an error getting OST token: " + args.id);
                    console.log("Err", e.err);
                    return e;
                });
        },
        // Returns a list of an OST transactions for a user by id
        getOstUserTransactions(_, args) {
            return ledgerService.get({id: args.id})
                .then(response => {
                    let transactions = response.data.transactions;
                    let next_page = response.data.meta.next_page_payload;
                    console.log(transactions);
                    console.log(next_page);
                    return {
                        transactions: transactions,
                        next_page_payload: next_page
                    };
                }).catch((e) => {
                    console.log("There was an error listing OST transactions for user: " + args.id);
                    console.log("Err", e.err);
                    return e;
                });
        },
        // Returns the balance of branded tokens by id
        getOstBalance(_, args) {
            return balanceService.get({id: args.id})
                .then(response => {
                    let balance = response.data.balance;
                    console.log(balance);
                    return balance;
                }).catch((e) => {
                    console.log("There was an error getting OST balance for user: " + args.id);
                    console.log("Err", e.err);
                    return e;
                });
        },
    },
    Mutation: {
        // Creates new OST user by name (not unique)
        createOstUser(_, args) {
            return userService.create({name: args.name} )
                .then(response => {
                    let user = response.data.user;
                    console.log(user);
                    return user;
                }).catch((e) => {
                    console.log("There was an error creating OST user")
                    console.log("Err", e.err);
                    return e;
                });
        },
        // Edits a OST user by id
        editOstUser(_, args) {
            return userService.edit({id: args.id} )
                .then(response => {
                    let user = response.data.user;
                    console.log(user);
                    return user;
                }).catch((e) => {
                    console.log("There was an error updating OST user: " + args.id)
                    console.log("Err", e.err);
                    return e;
                });
        },
        // Executes an OST airdrop
        executeOstAirdrop(_, args) {
            return airdropService.execute({
                    amount: args.amount,
                    user_ids: args.id,
                    airdropped: args.airdropped
            }).then(response => {
                    let user = response.data.user;
                    console.log(user);
                    return user;
                }).catch((e) => {
                    console.log("There was an error executing OST airdrop)
                    console.log("Err", e.err);
                    return e;
                });
        },
        // Creates an OST action
        createOstAction(_, args) {
            return actionService.create({
                name: args.name,
                kind: args.kind,
                currency: args.currency,
                arbitrary_amount: args.arbitrary_amount,
                amount: args.amount,
                commission_percent: args.commission_percent,
                arbitrary_commission: args.arbitrary_commission
            }).then(response => {
                let action = response.data.action;
                console.log(action);
                return action;
            }).catch((e) => {
                console.log("There was an error creating OST action");
                console.log("Err", e.err);
                return e;
            });
        },
        // Edits an OST action by id
        editOstAction(_, args) {
            return actionService.edit({
                id: args.id,
                name: args.name,
                kind: args.kind,
                currency: args.currency,
                arbitrary_amount: args.arbitrary_amount,
                amount: args.amount,
                commission_percent: args.commission_percent,
                arbitrary_commission: args.arbitrary_commission
            }).then(response => {
                let action = response.data.action;
                console.log(action);
                return action;
            }).catch((e) => {
                console.log("There was an error updating OST action: " + args.id)
                console.log("Err", e.err);
                return e;
            });
        },
        // Execute an OST transaction
        executeOstTransaction(_, args) {
            return transactionService.execute({
                from_user_id: args.from_user_id,
                to_user_id: args.to_user_id,
                action_id: args.action_id,
                amount: args.amount,
                commission_percent: args.commission_percent,
            }).then(response => {
                let transaction = response.data.transaction;
                console.log(transaction);
                return transaction;
            }).catch((e) => {
                console.log("There was an error executing OST transaction from: " + args.from_user_id + " to " + args.to_user_id);
                console.log("Err", e.err);
                return e;
            });
        },
        // Creates an OST transfer
        createOstTransfer(_, args) {
            return transferService.create({
                to_address: args.to_address,
                amount: args.amount,
            }).then(response => {
                let transfer = response.data.transfer;
                console.log(transfer);
                return transfer;
            }).catch((e) => {
                console.log("There was an error creating OST transfer");
                console.log("Err", e.err);
                return e;
            });
        },
    }
};

export default OstResolver;
