/**
 * Provides blocks for the Time of Flight Distance Sensor.
 */
//% color=#006633 icon="\uf042" block="VL53L4CD"
namespace VL53L4CD {
    const VL53L4CD_NONE = 0;
    const VL53L4CD_XTALK_FAILED = 253;
    const VL53L4CD_INVALID_ARGUMENT = 254;
    const VL53L4CD_TIMEOUT = 255;

    // Define constants for register addresses  
    const VL53L4CD_SOFT_RESET = 0x0000;
    const VL53L4CD_I2C_SLAVE_deviceAddress = 0x0001;
    const VL53L4CD_VHV_CONFIG_TIMEOUT_MACROP_LOOP_BOUND = 0x0008;
    const VL53L4CD_XTALK_PLANE_OFFSET_KCPS = 0x0016;
    const VL53L4CD_XTALK_X_PLANE_GRADIENT_KCPS = 0x0018;
    const VL53L4CD_XTALK_Y_PLANE_GRADIENT_KCPS = 0x001A;
    const VL53L4CD_RANGE_OFFSET_MM = 0x001E;
    const VL53L4CD_INNER_OFFSET_MM = 0x0020;
    const VL53L4CD_OUTER_OFFSET_MM = 0x0022;
    const VL53L4CD_GPIO_HV_MUX_CTRL = 0x0030;
    const VL53L4CD_GPIO_TIO_HV_STATUS = 0x0031;
    const VL53L4CD_SYSTEM_INTERRUPT = 0x0046;
    const VL53L4CD_RANGE_CONFIG_A = 0x005E;
    const VL53L4CD_RANGE_CONFIG_B = 0x0061;
    const VL53L4CD_RANGE_CONFIG_SIGMA_THRESH = 0x0064;
    const VL53L4CD_MIN_COUNT_RATE_RTN_LIMIT_MCPS = 0x0066;
    const VL53L4CD_INTERMEASUREMENT_MS = 0x006C;
    const VL53L4CD_THRESH_HIGH = 0x0072;
    const VL53L4CD_THRESH_LOW = 0x0074;
    const VL53L4CD_SYSTEM_INTERRUPT_CLEAR = 0x0086;
    const VL53L4CD_SYSTEM_START = 0x0087;
    const VL53L4CD_RESULT_RANGE_STATUS = 0x0089;
    const VL53L4CD_RESULT_SPAD_NB = 0x008C;
    const VL53L4CD_RESULT_SIGNAL_RATE = 0x008E;
    const VL53L4CD_RESULT_AMBIENT_RATE = 0x0090;
    const VL53L4CD_RESULT_SIGMA = 0x0092;
    const VL53L4CD_RESULT_DISTANCE = 0x0096;
    const VL53L4CD_RESULT_OSC_CALIBRATE_VAL = 0x00DE;
    const VL53L4CD_FIRMWARE_SYSTEM_STATUS = 0x00E5;
    const VL53L4CD_IDENTIFICATION_MODEL_ID = 0x010F;

    const VL53L4CD_DEFAULT_CONFIGURATION: number[] = [
        // Populate the array with the same values as in C code  
        // Conditional compilation is not available in TypeScript, so handle it programmatically  
        0x00, // 0x2d  
        0x00, // 0x2e  
        0x00, // 0x2f  
        0x11, // 0x30  
        0x02, // 0x31  
        0x00, // 0x32  
        0x02, // 0x33  
        0x08, // 0x34  
        0x00, // 0x35  
        0x08, // 0x36  
        0x10, // 0x37  
        0x01, // 0x38  
        0x01, // 0x39  
        0x00, // 0x3a  
        0x00, // 0x3b  
        0x00, // 0x3c  
        0x00, // 0x3d  
        0xff, // 0x3e  
        0x00, // 0x3f  
        0x0F, // 0x40  
        0x00, // 0x41  
        0x00, // 0x42  
        0x00, // 0x43  
        0x00, // 0x44  
        0x00, // 0x45  
        0x20, // 0x46  
        0x0b, // 0x47  
        0x00, // 0x48  
        0x00, // 0x49  
        0x02, // 0x4a  
        0x14, // 0x4b  
        0x21, // 0x4c  
        0x00, // 0x4d  
        0x00, // 0x4e  
        0x05, // 0x4f  
        0x00, // 0x50  
        0x00, // 0x51  
        0x00, // 0x52  
        0x00, // 0x53  
        0xc8, // 0x54  
        0x00, // 0x55  
        0x00, // 0x56  
        0x38, // 0x57  
        0xff, // 0x58  
        0x01, // 0x59  
        0x00, // 0x5a  
        0x08, // 0x5b  
        0x00, // 0x5c  
        0x00, // 0x5d  
        0x01, // 0x5e  
        0xcc, // 0x5f  
        0x07, // 0x60  
        0x01, // 0x61  
        0xf1, // 0x62  
        0x05, // 0x63  
        0x00, // 0x64  
        0xa0, // 0x65  
        0x00, // 0x66  
        0x80, // 0x67  
        0x08, // 0x68  
        0x38, // 0x69  
        0x00, // 0x6a  
        0x00, // 0x6b  
        0x00, // 0x6c  
        0x00, // 0x6d  
        0x0f, // 0x6e  
        0x89, // 0x6f  
        0x00, // 0x70  
        0x00, // 0x71  
        0x00, // 0x72  
        0x00, // 0x73  
        0x00, // 0x74  
        0x00, // 0x75  
        0x00, // 0x76  
        0x01, // 0x77  
        0x07, // 0x78  
        0x05, // 0x79  
        0x06, // 0x7a  
        0x06, // 0x7b  
        0x00, // 0x7c  
        0x00, // 0x7d  
        0x02, // 0x7e  
        0xc7, // 0x7f  
        0xff, // 0x80  
        0x9B, // 0x81  
        0x00, // 0x82  
        0x00, // 0x83  
        0x00, // 0x84  
        0x01, // 0x85  
        0x00, // 0x86  
        0x00  // 0x87  
    ];

    export class VL53L4CD {
        deviceAddress: number;
        isInitialized: boolean;

        constructor(address: number = 0x29) {
            this.deviceAddress = address;
            this.isInitialized = false;
        }

        init() {
            const sensorId = this.getSensorId();
            if (sensorId !== 0xEBAA) {
                return;
            }

            for (let i = 0; true; i++) {
                if (this.readRegister(VL53L4CD_FIRMWARE_SYSTEM_STATUS, 8) == 0x3) {
                    break;
                }
                if (i > 1000) {
                    return;
                }
                basic.pause(1);
            }

            // load default setting
            for (let addr = 0x2D; addr <= 0x87; addr++) {
                this.writeRegister(addr, VL53L4CD_DEFAULT_CONFIGURATION[addr - 0x2D], 8)
            }

            // start VHV 
            this.writeRegister(VL53L4CD_SYSTEM_START, 0x40, 8);
            for (let i = 0; true; i++) {
                if (this.checkForDataReady()) {
                    break;
                }
                if (i > 1000) {
                    return;
                }
                basic.pause(1);
            }
            this.clearInterrupt();
            this.stopRanging();
            this.writeRegister(VL53L4CD_VHV_CONFIG_TIMEOUT_MACROP_LOOP_BOUND, 0x09);
            this.writeRegister(0x0B, 0);
            this.writeRegister(0x0024, 0x500, 16);
            // SetRangeTiming
            this.setRangeTiming(50, 0);
            this.isInitialized = true;
        }

        checkForDataReady() {
            const muxCtrl = this.readRegister(VL53L4CD_GPIO_HV_MUX_CTRL, 8);
            const pol = (muxCtrl & 0x10) >> 4;
            const invertedPol = pol === 1 ? 0 : 1;
            const tioHvStatus = this.readRegister(VL53L4CD_GPIO_TIO_HV_STATUS, 8);
            return (tioHvStatus & 1) === invertedPol;
        }

        writeRegister(reg: number, val: number, n_of_bit = 8) {
            const buffer = pins.createBuffer(2 + n_of_bit / 8);
            buffer.setNumber(NumberFormat.UInt16BE, 0, reg);
            switch (n_of_bit) {
                case 16:
                    buffer.setNumber(NumberFormat.UInt16BE, 2, val);
                    break;
                case 32:
                    buffer.setNumber(NumberFormat.UInt32BE, 2, val);
                    break;
                default:
                    buffer.setNumber(NumberFormat.UInt8BE, 2, val);
                    break;
            }
            pins.i2cWriteBuffer(this.deviceAddress, buffer);
        }

        readRegister(reg: number, n_of_bit = 8): number {
            // Write the register address as two bytes
            pins.i2cWriteNumber(this.deviceAddress, reg, NumberFormat.UInt16BE);
            switch (n_of_bit) {
                case 16:
                    return pins.i2cReadNumber(this.deviceAddress, NumberFormat.UInt16BE);
                case 32:
                    return pins.i2cReadNumber(this.deviceAddress, NumberFormat.UInt32BE);
                default:
                    return pins.i2cReadNumber(this.deviceAddress, NumberFormat.UInt8BE);
            }
        }

        getSensorId(): number {
            return this.readRegister(VL53L4CD_IDENTIFICATION_MODEL_ID, 16);
        }
        clearInterrupt() {
            this.writeRegister(VL53L4CD_SYSTEM_INTERRUPT_CLEAR, 0x01);
        }
        stopRanging() {
            this.writeRegister(VL53L4CD_SYSTEM_START, 0x01);
        }
        setRangeTiming(timing_budget_ms: number, inter_measurement_ms: number) {
            let clock_pll, osc_freq, ms_byte, ls_byte, tmp;
            let macro_period_us = 0;
            let timing_budget_us = 0;
            let inter_measurement_factor = 1.055;
            osc_freq = this.readRegister(0x0006, 16);
            if (osc_freq != 0) {
                timing_budget_us = timing_budget_ms * 1000;
                macro_period_us = 2304 * (0x40000000 / osc_freq) >> 6;

            } else {
                return;
            }


            if (timing_budget_ms < 10 || timing_budget_ms > 200) {
                // Timing budget check validity
                return;
            } else if (inter_measurement_ms == 0) {
                // Sensor runs in continuous mode
                this.writeRegister(VL53L4CD_INTERMEASUREMENT_MS, 0, 32);
                timing_budget_us -= 2500;
            } else if (inter_measurement_ms > timing_budget_ms) {
                // Sensor runs in autonomous low power mode
                clock_pll = this.readRegister(VL53L4CD_RESULT_OSC_CALIBRATE_VAL, 16);
                clock_pll = clock_pll & 0x3FF;
                inter_measurement_factor = inter_measurement_factor * inter_measurement_ms * clock_pll;
                this.writeRegister(VL53L4CD_INTERMEASUREMENT_MS, inter_measurement_factor, 32);
                timing_budget_us -= 4300;
                timing_budget_us /= 2;
            } else {
                return;
            }

            ms_byte = 0;
            timing_budget_us = timing_budget_us << 12;
            tmp = macro_period_us * 16;
            ls_byte = ((timing_budget_us + ((tmp >> 6) >> 1)) / (tmp >> 6)) - 1;
            while ((ls_byte & 0xFFFFFF00) > 0) {
                ls_byte = ls_byte >> 1;
                ms_byte++;
            }
            ms_byte = (ms_byte << 8) + (ls_byte & 0xFF);
            this.writeRegister(VL53L4CD_RANGE_CONFIG_A, ms_byte, 16);
            ms_byte = 0;
            tmp = macro_period_us * 12
            ls_byte = ((timing_budget_us + ((tmp >> 6) >> 1)) / (tmp >> 6)) - 1;
            while ((ls_byte & 0xFFFFFF00) > 0) {
                ls_byte = ls_byte >> 1;
                ms_byte++;
            }
            ms_byte = (ms_byte << 8) + (ls_byte & 0xFF);
            this.writeRegister(VL53L4CD_RANGE_CONFIG_B, ms_byte, 16);
        }

        startRanging() {
            let tmp = this.readRegister(VL53L4CD_INTERMEASUREMENT_MS, 32);
            if (tmp == 0) {
                this.writeRegister(VL53L4CD_SYSTEM_START, 0x21);
            } else {
                this.writeRegister(VL53L4CD_SYSTEM_START, 0x40);
            }
        }
        getResult() {
            let results: any = {};
            let temp_16, temp_8;
            const statusRtn: number[] = [
                255, 255, 255, 5, 2, 4, 1, 7, 3, 0,
                255, 255, 9, 13, 255, 255, 255, 255, 10, 6,
                255, 255, 11, 12
            ];
            temp_8 = this.readRegister(VL53L4CD_RESULT_RANGE_STATUS, 8);
            temp_8 = temp_8 & 0x1F;
            if (temp_8 < 24) {
                temp_8 = statusRtn[temp_8];
            }

            results["range_status"] = temp_8;
            temp_16 = this.readRegister(VL53L4CD_RESULT_SPAD_NB, 16);
            results["number_of_spad"] = temp_16 / 256;
            temp_16 = this.readRegister(VL53L4CD_RESULT_SIGNAL_RATE, 16);
            results["signal_rate_kcps"] = temp_16 * 8;
            temp_16 = this.readRegister(VL53L4CD_RESULT_AMBIENT_RATE, 16);
            results["ambient_rate_kcps"] = temp_16 * 8;
            temp_16 = this.readRegister(VL53L4CD_RESULT_SIGMA, 16);
            results["sigma_mm"] = temp_16 / 4;
            temp_16 = this.readRegister(VL53L4CD_RESULT_DISTANCE, 16);
            results["distance_mm"] = temp_16;
            results["signal_per_spad_kcps"] = results["signal_rate_kcps"] / results["number_of_spad"];
            results["ambient_per_spad_kcps"] = results["ambient_rate_kcps"] / results["number_of_spad"];
            basic.pause(5); // Wait a few ms to avoid too high polling
            return results;
        }
    }

    //% blockSetVariable=tof_sensor
    //% blockId=vl53l4cd_create block="create Time of Flight sensor"
    export function createInstance() {
        const tof = new VL53L4CD();
        tof.init();
        return tof;
    }

    //% blockId=vl53l4cd_start_ranging
    //% block="$tof_instance start"
    //% tof_instance.defl=tof_sensor
    //% tof_instance.shadow=variables_get
    export function startRanging(tof_instance: VL53L4CD) {
        tof_instance.startRanging();
    }

    //% blockId=vl53l4cd_stop_ranging
    //% block="$tof_instance stop"
    //% tof_instance.defl=tof_sensor
    //% tof_instance.shadow=variables_get
    export function stopRanging(tof_instance: VL53L4CD) {
        tof_instance.stopRanging();
    }

    //% blockId=vl53l4cd_get_value
    //% block="%tof_instance | get value"
    //% tof_instance.defl=tof_sensor
    //% tof_instance.shadow=variables_get
    export function check_obstacle(tof_instance: VL53L4CD) {
        tof_instance.clearInterrupt();
        let distance_mm = tof_instance.getResult()["distance_mm"];
        if (distance_mm < 100 && distance_mm != 0) {
            return 1;
        } else {
            return 0;
        }
    }

    //% blockId=vl53l4cd_get_distance_mm
    //% block="%tof_instance | get distance (in mm)"
    //% tof_instance.defl=tof_sensor
    //% tof_instance.shadow=variables_get
    export function get_distance_mm(tof_instance: VL53L4CD) {
        tof_instance.clearInterrupt();
        tof_instance.startRanging();
        let distance_mm = tof_instance.getResult()["distance_mm"];
        tof_instance.stopRanging();
        if (distance_mm != 0 ) {
            return distance_mm;
        } else {
            return 1000;
        }
    }
}
