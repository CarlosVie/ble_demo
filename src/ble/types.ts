export type Device = {
  readonly id?: string;
  readonly name?: string;
  readonly advertising?: Advertising;
  readonly rssi?: number;
  readonly mtu?: number;
  readonly manufacturerData?: string[];
  readonly serviceData?: Map<string, any>;
  readonly serviceUUIDs?: Array<string>;
  readonly localName?: string;
  readonly txPowerLevel?: number;
  readonly solicitedServiceUUIDs?: string[];
  readonly isConnectable?: boolean;
  readonly overflowServiceUUIDs?: string[];
  readonly characteristics?: Characteristics[];
};

export type Advertising = {
  readonly isConnectable?: number;
  readonly manufacturerData?: string[];
  readonly serviceData?: Map<string, any>;
  readonly serviceUUIDs?: Array<string>;
  readonly txPowerLevel?: number;
  readonly kCBAdvDataRxPrimaryPHY?: number;
  readonly kCBAdvDataRxSecondaryPHY?: number;
  readonly kCBAdvDataTimestamp?: number;
  readonly characteristics?: Characteristics[];
};

export type Characteristics = {
  readonly characteristic?: string;
  readonly isNotifying?: boolean;
  readonly properties?: any; // IOS
  readonly service?: string;
  readonly value?: Value;
  readonly descriptors?: Descriptors; // Android
};

export type CharacteristicsAndroid = {
  readonly characteristic?: string;
  readonly isNotifying?: boolean;
  readonly properties?: Map<string, string>;
  readonly service?: string;
  readonly value?: Value;
  readonly descriptors?: Descriptors; // Android
};

export type Descriptors = {
  // Android
  uuid: string;
  value: any;
};

export type Value = {
  CDVType?: string;
  bytes?: string[];
  data?: string;
};

/** IOS Divece Props */
export type DeviceOnAndroid = {
  readonly id: string;
  readonly name: string;
  readonly rssi: number;
  readonly advertising: AdvertisingAndroid;
};

export type AdvertisingAndroid = {
  readonly isConnectable: boolean;
  readonly manufacturerData: Value;
  readonly serviceData: any;
  readonly serviceUUIDs: string[];
  readonly txPowerLevel: number;
};

/** ANDROID Divece Props */
