export interface InitResponse {
  status: string;
  failedreason: string;
  sessionkey: string;
  gw: Gateway;
  redirectGatewayURL: string;
  redirectGatewayURLFailed: string;
  GatewayPageURL: string;
  storeBanner: string;
  storeLogo: string;
  desc: Description[];
  is_direct_pay_enable: string;
}

export interface Description {
  name: string;
  type: string;
  logo: string;
  gw: string;
}

export interface Gateway {
  visa: string;
  master: string;
  amex: string;
  othercards: string;
  internetbanking: string;
  mobilebanking: string;
}
