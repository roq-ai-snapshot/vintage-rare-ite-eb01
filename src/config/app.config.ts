interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: [],
  tenantRoles: ['Business Owner', 'Inventory Manager'],
  tenantName: 'Vendor',
  applicationName: 'Vintage Rare Item v1',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: ['Manage user data', 'Manage vendor data', 'Manage item data', 'Manage order data'],
  getQuoteUrl: 'https://app.roq.ai/proposal/dfb5eefa-5b92-4b94-90c5-03b6cc0f81ef',
};
