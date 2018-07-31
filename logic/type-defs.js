export default [`
type OSTUsers {
    users: [ OSTUser ]
    next_page_payload: NextPage
    err: Err
}

type OSTUser {
    name: String
    id: String
    addresses: [[ String ]]
    airdropped_tokens: Float
    token_balance: Float
    err: Err
}

type OSTActions {
    actions: [ OSTAction ]
    next_page_payload: NextPage
    err: Err
}

type OSTAction {
    id: String
    name: String
    kind: String
    currency: String
    amount: Float
    arbitrary_amount: Boolean
    commission_percent: Int
    arbitrary_commission: Boolean
    err: Err
}

type OSTTransactions {
    transactions: [ OSTTransaction ]
    next_page_payload: NextPage
    err: Err
}

type OSTTransaction {
    id: String
    from_user_id: String
    to_user_id: String
    transaction_hash: String
    action_id: Int
    timestamp: String
    status: String
    gas_price: Int
    gas_used: Int
    transaction_fee: Float
    block_number: Int
    amount: Float
    commission_amount: Float
    airdropped_amount: Float
    err: Err
}

type OSTAirdrops {
    airdrops: [ OSTAirdrop ]
    next_page_payload: NextPage
    err: Err
}

type OSTAirdrop {
    id: String
    current_status: String
    steps_complete: [ String ]
    err: Err
}

type OSTToken {
    company_uuid: String
    name: String
    symbol: String
    symbol_icon: String
    conversion_factor: Float
    token_erc20_address: String
    simple_stake_contract_address: String
    total_supply: Float
    ost_utility_balance: [[ Float ]]
    price_points: OstPricePoint
    err: Err 
}

type OSTTransfers {
    transfers: [ OSTTransfer ]
    next_page_payload: NextPage
    err: Err
}

type OSTTransfer {
    id: String
    from_address: String
    to_address: String
    amount: Int
    transaction_hash: String
    timestamp: Int
    status: String
    gas_price: Int
    gas_used: Int
    block_number: Int
    chain_id: Int
    err: Err
}

type OSTBalance {
    available_balance: Float
    airdropped_balance: Float
    token_balance: Float
    err: Err
}

type NextPage {
    order_by: String
    order: String
    limit: Int
    page_no: Int
}

type Err {
    code: String
    msg: String
    error_data: [ String ]
    internal_id: String
}

type OstPricePoint {
    OST: UsdPrice
    BT: UsdPrice
}

type UsdPrice {
    USD: Float
}
    
type Query {
  # Get a list of all the users of OST
  listOstUsers(page_no: Int, airdropped: Boolean, order_by: String, order: String, limit: Int, names: String): OSTUsers
  
  # Get a specific OST user by id
  getOstUser(id: String!): OSTUser
  
  # Get a list of all the OST actions available
  listOstActions: OSTActions
  
  # Get a specific OST action by id 
  getOstAction(id: String!): OSTAction
  
  # Get a list of all the OST Transactions
  listOstTransactions(page: Int, limit: Int): OSTTransactions
  
  # Get a specific OST transaction by id 
  getOstTransaction(id: String!): OSTTransaction
  
  # Get a list of all the OST Airdrops
  listOstAirdrops(page: Int, limit: Int, status: String): OSTAirdrops
  
  # Get the status of a specific OST airdrop by id 
  getOstAirdrop(id: String!): OSTAirdrop
  
  # Get a specific OST transfer by id 
  listOstTransfers: OSTTransfers
  
  # Get information about an OST transfer by id 
  getOstTransfer(id: String!): OSTTransfer
  
  # Get information about an OST token by id 
  getOstToken(id: String!): OSTToken
  
  # Get a list of all user transactions by id
  getOstUserTransactions(id: String!): OSTTransactions
  
  # Get a OST balance by id
  getOstBalance(id: String!): OSTBalance
} 

type Mutation {  
  # Create a new OST user
  createOstUser(name: String!): OSTUser
  
  # Edit an existing OST user
  editOstUser(id: String!): OSTUser 
  
  # Execute an OST airdrop
  executeOstAirdrop( amount: Float!, user_ids: String!, airdropped: Boolean!): OSTAirdrop
  
  # Create a new OST action
  createOstAction( name: String!, kind: String!, currency: String!, arbitrary_amount: Boolean!, arbitrary_commission: Boolean!, amount: Float!, commission_percent: Float! ): OSTAction
  
  # Edit an existing OST action
  editOstAction( name: String!, kind: String!, currency: String!, arbitrary_amount: Boolean!, arbitrary_commission: Boolean!, amount: Float!, commission_percent: Float! ): OSTAction
  
  # Execute an OST transaction
  executeOstTransaction(from_user_id: String!, to_user_id: String!, action_id: Int!, amount: Float, commission_percent: String): OSTTransaction
  
  # Create an OST transfer
  createOstTransfer(to_address: String!, amount: Int!): OSTTransfer  
}
`]
