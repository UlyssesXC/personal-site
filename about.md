# Chen Xiangchao —  
一句话解释我的使命：我相信：Embodied ai的未来离不开工程应用的能力、光学、嵌入式和边缘计算、性能加速...（朝着我的）
下面是我为此所做的努力和准备

## Quick Facts
这句话改到这里：通信+机器人的工程师 & Linux+嵌入式的技能embedded-systems specialist pivoting to AI-driven embodied intelligence
- **Current program:** M.Eng. in Electrical & Computer Engineering, Western University (Canada)  
- **Research interests:** robot manipulation & grasping, multimodal representation learning, vision-language action grounding, large-language-model planning, structured reasoning & code generation for robotics (inspired by Prof. Wenhu Chen’s work), efficient on-device inference, safe human-robot interaction  （这里写的很好，但是可以适当精简一点点？多模态和VLM是不是可以写在一起，然后机器人特化的大模型方向可以写在一起，使用 - 来分行
- **Technical stack:** C/C++, Python, ROS2, Qt/QML, PLC (我用的其实是西门子和汇川), ARM NEON/SIMD（这个提到Python后 然后括号解释一下是ARM架构数据并行计算加速）,（后跟Cuda的加速 in progress） Linux驱动和docker, 嵌入式设备通信（EtherCAT / CAN）, 
- **Awards:** 1st Prize – TI Cup National Undergraduate Electronic Design Contest (2018) · 3rd Prize (2019) （这项放在最后的education里）

---

## What I Build

### 1. Autonomous Inspection Robots (2023 – 2024)
![Inspection Robot Demo](./media/inspection_robot.gif)

（在一家团队人数不多的Startup里 获得了很多学习和决策的机会，作为） **principal technologist** , I steered（不准确 改为我主导设计、验证、软件开发、硬件开发、测试 全过程） the end-to-end delivery of **two** production-grade robotic cells for high-speed visual inspection on automotive assembly lines.

* Reduced manual inspection time by **60 – 80 %** across 5 factories within two months.  （客户包括TTI（https://www.ttigroup.com/）的主要下游工厂）
* **Hands-on scope:** system architecture, power & safety circuits, PLC sequencing, robotic-arm motion planning, deep-learning（不准确 改为笼统的CV方案 包括Yolo、传统CV、无监督学习等） vision (YOLOv8 + classical CV), cloud dashboard.  加入边缘计算和小模型部署能力
* **Toolchain mastery:** programmed **10 + industrial robot families** via teach pendants, ROS-Industrial, vendor SDKs, Ethernet/IP, PROFINET & OPC UA.  
* **Imaging expertise:** （强调所有光学技术方案都了解，包括：线扫、结构光等，具备光学工程师根据工程需求优化成像方案的能力）.  

### 2. 5G PHY Optimisation @ Nokia (2020 – 2022)
![5G PHY Optimisation](./media/nokia_5g.gif)

Embedded-software engineer in the 5 G base-station team, focusing on ARM-based Layer-1 acceleration.

* Implemented & optimised **LDPC / Polar decoding, channel estimation and beam-forming** kernels in C/assembly using ARM NEON & DSP intrinsics — delivered **20 % throughput gain** at constant power.  (这里不太准确 虽然可能包含你说的工作，但是我已经有些忘记了，我主要涉及的更多是基站物理层的各种通信算法的加速)
（这句去掉）* Devised autotuning scripts and HIL regression tests, cutting release validation time by **30 %**.  
* **Current up-skill:** （加入我的心路历程：我发现在NOKIA的工作和CUDA加速的共通之处，，让我对大模型部署和加速的方向（用词准确吗？）产生了更多的兴趣）studying CUDA for heterogeneous compute. （后面去掉）I have completed Udacity’s “Accelerated Computing” modules, grasped kernel memory hierarchy & occupancy tuning, and am blogging the journey — first post *“Shared-Memory GEMM Micro-kernel from Scratch”* (draft online).

---
新加入一个education，放我本和硕学校，uwo的地方一句话写：信号处理和滤波，选修了机器人学
本写我的奖项

## Mission
（这里做些修改，
我在找学习ai的机会，我想通过Intern、RA、PhD等任何方式学习现在的ai方向，在未来，我的愿景是结合我的机器人infra能力和工程经验、光学能力、嵌入式开发能力，结合我学到的cuda加速能力、边缘设备部署能力，来探索embodied ai的未来
I am seeking a **PhD position** where I can fuse low-level robotic infrastructure with high-level learning algorithms, transforming years of controls & embedded experience into scalable embodied intelligence.

[**Download my full CV →**](./resume/Chen_Xiangchao_CV.pdf)
