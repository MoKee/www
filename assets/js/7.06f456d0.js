(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{173:function(t,e,o){"use strict";o.r(e);var r=o(0),n=Object(r.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),o("ol",[o("li",[o("p",[t._v("Download Recovery - Eg. "),o("a",{attrs:{href:"https://twrp.me/",target:"_blank",rel:"noopener noreferrer"}},[t._v("TWRP"),o("OutboundLink")],1)]),t._v(" "),o("ul",[o("li",[t._v("You can go to the device page via our "),o("a",{attrs:{href:"https://download.mokeedev.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("download page"),o("OutboundLink")],1),t._v(" and click "),o("strong",[t._v("Download Recovery")]),t._v(".")]),t._v(" "),o("li",[t._v("If you can't find the recovery for your device, use the search engine to find the tutorials by device modders and/or experienced phone flashers.")])])]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9)]),t._v(" "),t._m(10),t._v(" "),o("ol",[o("li",[o("p",[t._v("Download the Mokee ROM package you want to install.")]),t._v(" "),o("ul",[o("li",[o("strong",[t._v("Optional")]),t._v(" - You can download the third-party extension packages, such as "),o("a",{attrs:{href:"https://opengapps.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("OpenGapps"),o("OutboundLink")],1),t._v(".")])])]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"getting-started"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[this._v("#")]),this._v(" Getting Started")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"unlock-bootloader"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#unlock-bootloader"}},[this._v("#")]),this._v(" Unlock bootloader")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("Note")]),this._v(" "),e("p",[this._v("You may need to unlock the device before flashing the third-party ROM. This step only needs to be performed once.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"danger custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("Important")]),this._v(" "),e("p",[this._v("Unlocking the bootloader will delete all data on the device! Make sure you have backed up the data you want to keep to your PC and/or Google account.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"install-recovery-via-fastboot"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install-recovery-via-fastboot"}},[this._v("#")]),this._v(" Install Recovery via Fastboot")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("Connect your device to the computer via USB.")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("li",[o("p",[t._v("Open a Command Prompt (Windows) or Terminal (Linux or macOS) on the computer and enter:")]),t._v(" "),o("p",[o("code",[t._v("adb reboot bootloader")])]),t._v(" "),o("p",[t._v("You can also start fastboot mode by key combination：")]),t._v(" "),o("ul",[o("li",[t._v("After turning off the device, press and hold down the "),o("strong",[t._v("Volume Down + Power Button")]),t._v(' until "FASTBOOT" appears at the top of the screen, and then release.')])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("li",[o("p",[t._v("Once the device is in "),o("code",[t._v("fastboot")]),t._v(" mode, verify that your PC finds it by typing:")]),t._v(" "),o("p",[o("code",[t._v("fastboot devices")])]),t._v(" "),o("div",{staticClass:"warning custom-block"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("If you see "),o("code",[t._v("no permissions fastboot")]),t._v(" on Linux or macOS, run this command under "),o("code",[t._v("ROOT")]),t._v(" privillege.")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("Flash Recovery to your device.")]),this._v(" "),e("p",[e("code",[this._v("fastboot flash recovery twrp-x.x.x-x-x.img")])]),this._v(" "),e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("Note")]),this._v(" "),e("p",[this._v("Adjust the command according to the file name of a recovery image.")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("Enter the Recovery mode to verify the installation.")]),this._v(" "),e("ul",[e("li",[this._v("After turning off the device, press and hold the "),e("strong",[this._v("Volume Up + Power Button")]),this._v(" until you enter Recovery mode, and then release.")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"install-mokee-rom-through-recovery"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install-mokee-rom-through-recovery"}},[this._v("#")]),this._v(" Install MoKee ROM through Recovery")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("If you haven't enter the Recovery mode yet, please reboot into Recovery mode.")]),this._v(" "),e("ul",[e("li",[this._v("After turning off the device, press and hold the "),e("strong",[this._v("Volume Up + Power Button")]),this._v(" until you enter Recovery mode, and then release.")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("Select the "),e("code",[this._v("WIPE")]),this._v(" button on the main interface.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("Select "),e("code",[this._v("Format Data")]),this._v(" to perform the formatting process. This will delete all encrypted files and stored on internal storage.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("Locate the MoKee ROM package you stored on the internal storage and perform the installation process.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("Use the same method to install other third-party extension packages.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("After the installation is complete, return to the main menu, select "),e("code",[this._v("Reboot")]),this._v(", and then "),e("code",[this._v("System")]),this._v(".")])])}],!1,null,null,null);e.default=n.exports}}]);