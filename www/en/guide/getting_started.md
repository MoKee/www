# Getting Started

## Unlock bootloader

::: warning Note
You may need to unlock the device before flashing the third-party ROM. This step only needs to be performed once.
:::

::: danger Important
Unlocking the bootloader will delete all data on the device! Make sure you have backed up the data you want to keep to your PC and/or Google account.
:::

## Install Recovery via Fastboot

1. Download Recovery - Eg. [TWRP](https://twrp.me/)

   * You can go to the device page via our [download page](https://download.mokeedev.com) and click **Download Recovery**.
   * If you can't find the recovery for your device, use the search engine to find the tutorials by device modders and/or experienced phone flashers.

2. Connect your device to the computer via USB.

3. Open a Command Prompt (Windows) or Terminal (Linux or macOS) on the computer and enter:

   ```adb reboot bootloader```

   You can also start fastboot mode by key combination：

   * After turning off the device, press and hold down the **Volume Down + Power Button** until "FASTBOOT" appears at the top of the screen, and then release.

4. Once the device is in `fastboot` mode, verify that your PC finds it by typing:

   ```fastboot devices```

   ::: warning Note

   If you see `no permissions fastboot` on Linux or macOS, run this command under `ROOT` privillege.

   :::

5. Flash Recovery to your device.

   ```fastboot flash recovery twrp-x.x.x-x-x.img```

   ::: warning Note

   Adjust the command according to the file name of a recovery image.

   :::

6. Enter the Recovery mode to verify the installation.

   * After turning off the device, press and hold the **Volume Up + Power Button** until you enter Recovery mode, and then release.

## Install MoKee ROM through Recovery

1. Download the Mokee ROM package you want to install.
    * **Optional** - You can download the third-party extension packages, such as [OpenGapps](https://opengapps.org/).

2. If you haven't enter the Recovery mode yet, please reboot into Recovery mode.
    * After turning off the device, press and hold the **Volume Up + Power Button** until you enter Recovery mode, and then release.

3. Select the `WIPE` button on the main interface.
4. Select `Format Data` to perform the formatting process. This will delete all encrypted files and stored on internal storage.
5. Locate the MoKee ROM package you stored on the internal storage and perform the installation process.
6. Use the same method to install other third-party extension packages.
7. After the installation is complete, return to the main menu, select `Reboot`, and then `System`.
