import type { InterviewModule } from './types';

export const eceEmbeddedModule: InterviewModule = {
  id: "ece-embedded",
  title: "Embedded Systems Engineer",
  branch: "ece",
  category: "Electronics & Embedded",
  description: "Embedded C/C++, Microcontrollers, RTOS, memory mapping, and hardware protocols.",
  icon: "cpu",
  color: "bg-emerald-50 border-emerald-200 hover:border-emerald-500",
  accent: "emerald",
  roundQuestions: {
    hrScreen: [
      "Tell me about your academic background in Electronics and why you chose Embedded Systems.",
      "Walk me through a micro-controller or IoT project you built during your degree.",
      "How do you handle tight project deadlines when hardware debugging takes longer than expected?",
      "What are your key career aspirations in the Embedded/Semiconductor industry?"
    ],
    techDomain: [
      "What is the difference between static and dynamic memory allocation in Embedded C?",
      "Explain the concept of Interrupt Service Routines (ISRs) and volatile variables.",
      "How does I2C protocol differ from SPI and UART in terms of wiring and speed?",
      "What is a Real-Time Operating System (RTOS) mutex vs binary semaphore?",
      "How do you debug memory leaks or stack overflow in resource-constrained microcontrollers?"
    ],
    managerial: [
      "Describe a situation where a hardware bug delayed your project and how you communicated with your team.",
      "How do you decide between choosing an off-the-shelf microcontroller vs designing a custom PCB?",
      "If a sensor driver produces noisy or inconsistent readings in production, how would you troubleshoot?"
    ]
  },
  skills: [
    {
      id: "embedded-c",
      title: "Embedded C & Firmware",
      questions: [
        "What is the purpose of the 'volatile' keyword in C when accessing hardware registers?",
        "Explain bitwise manipulation to clear, set, and toggle a specific bit in a register.",
        "What is the difference between a pointer and a reference in Embedded C++?",
        "How do memory sections (.text, .data, .bss) get mapped into microcontrollers RAM/Flash?"
      ]
    },
    {
      id: "protocols",
      title: "Communication Protocols",
      questions: [
        "Explain how the I2C protocol handles multi-master arbitration.",
        "What are the 4 SPI modes and how does clock polarity (CPOL) affect data sampling?",
        "How does UART framing work, and why is baud rate matching critical?"
      ]
    }
  ]
};

export const iotModule: InterviewModule = {
  id: "ece-iot",
  title: "IoT Firmware Developer",
  branch: "ece",
  category: "Electronics & Embedded",
  description: "Sensors, MQTT, Wi-Fi/BLE modules, low-power modes, and edge computing.",
  icon: "network",
  color: "bg-teal-50 border-teal-200 hover:border-teal-500",
  accent: "teal",
  roundQuestions: {
    hrScreen: [
      "Introduce yourself and share your experience with IoT hardware and wireless sensors.",
      "What inspired you to work at the intersection of hardware and connected cloud systems?",
      "Describe how you collaborate when working on cross-functional hardware and software teams."
    ],
    techDomain: [
      "How does the MQTT protocol work, and what are its Quality of Service (QoS) levels?",
      "Explain Bluetooth Low Energy (BLE) GATT architecture (Services and Characteristics).",
      "How do you optimize an IoT edge device for battery longevity and deep sleep modes?",
      "What security measures do you implement to prevent unauthorized OTA firmware updates?"
    ],
    managerial: [
      "Describe an IoT deployment challenge you faced and how you ensured system reliability.",
      "How do you handle edge device disconnectivity when network signals drop in the field?"
    ]
  },
  skills: [
    {
      id: "iot-protocols",
      title: "Wireless & Network Protocols",
      questions: [
        "Explain the difference between MQTT and HTTP for constrained edge devices.",
        "How does LoRaWAN achieve long-range low-power communication?"
      ]
    }
  ]
};
