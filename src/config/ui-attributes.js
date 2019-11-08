import * as button from './attributes/button/button.json'

export default {
  ...button,
  ...{
   "a-locale-provider/locale": {
    "description": "language package setting, you can find the packages in this path: antd/lib/locale-provider/",
		"optionType": "object",
		"defaultValue": "-"
   } 
  },
  ...{
    "a-config-provider/getPopupContainer": {
      "description": "to set the container of the popup element. The default is to create a div element in body.",
      "optionType": "Function(triggerNode)",
      "defaultValue": "() => document.body"
    }
  }
}