export type Device = {
  readonly id?: string;
  readonly name?: string;
  readonly advertising?: Advertising;
  readonly rssi?: number;
  readonly characteristics?: Characteristics[];
};

export type Advertising = {
  readonly isConnectable?: number;
  readonly kCBAdvDataRxPrimaryPHY?: number;
  readonly kCBAdvDataRxSecondaryPHY?: number;
  readonly kCBAdvDataTimestamp?: number;
  readonly characteristics?: Characteristics[];
};

export type Characteristics = {
  readonly characteristic?: string;
  readonly isNotifying?: boolean;
  readonly properties?: string[];
  readonly service?: string;
  readonly value?: Value;
};

export type Value = {
  CDVType?: string;
  bytes?: string[];
  data?: string;
};
