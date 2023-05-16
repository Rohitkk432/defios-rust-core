use anchor_lang::error_code;

#[error_code]
pub enum DefiOSError {
    // 6000
    #[msg("Invalid Signature")]
    SignatureVerificationFailed,

    // 6001
    #[msg("User not verified")]
    UnauthorizedUser,

    // 6002
    #[msg("Invalid Name Router")]
    InvalidNameRouter,

    // 6003
    #[msg("Token account mismatch")]
    TokenAccountMismatch,

    // 6004
    #[msg("Insufficient funds for staking")]
    InsufficientStakingFunds,

    // 6005
    #[msg("Cannot stake/unstake for a closed issue")]
    IssueClosedAlready,

    // 6006
    #[msg("Commit hashes do not match for reward eligibility")]
    HashesMismatch,

    // 6007
    #[msg("Tokens Already Claimed")]
    AlreadyClaimed,

    // 6008
    #[msg("Cannot stake/unstake on a closed objective")]
    ObjectiveClosedAlready,

    // 6009
    #[msg("Parent was not mentioned to which objective is to be added")]
    NoParentEntered,

    //6010
    #[msg("Roadmap end time before roadmap creation time")]
    RoadmapInvalidEndTime,

    //6010
    #[msg("Can not add PR of somebody else's commits")]
    UnauthorizedPR,

    // 6011
    #[msg("Math overflow")]
    MathOverflow,

    // 6012
    #[msg("Token Mint mismatch")]
    MintMismatch,

    // 6013
    #[msg("Vesting contract has not reached release time")]
    VestingNotReachedRelease,

    //6014
    #[msg("Pull request not yet accepted")]
    PullRequestNotYetAccepted,

    //6015
    #[msg("You are not authorized to merge this pull request")]
    CanNotMergePullRequest,

    //6016
    #[msg("Unauthorized smart contract Action")]
    UnauthorizedActionAttempted,

    //6017
    #[msg("No money was staked on this issue, Still thanks for the support to the community")]
    NoMoneyStakedOnIssue,
}
