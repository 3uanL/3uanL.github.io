/**
 * 科研经历与项目。每个项目会自动生成一个详情页 /research/<id>。
 *
 * 加配图：把图片放到 public/figures/ 下，然后写 figure: '/figures/xxx.png'
 */

export type Project = {
  id: string;
  title: string;
  /** 'Research' 显示在科研经历区，'Selected' 显示在竞赛/课程项目区 */
  group: 'Research' | 'Selected';
  /** 实验室/单位（可留空） */
  lab?: string;
  /** 你的角色 */
  role: string;
  /** 导师（可留空） */
  advisors?: string[];
  /** 时间，例如 'Nov 2025 – Present' */
  period: string;
  /** 一句话概括（显示在卡片上） */
  summary: string;
  /** 要点（会显示在卡片和详情页） */
  bullets: string[];
  /** 关键词标签 */
  tags?: string[];
  /** 链接：代码仓库、数据集、论文等 */
  links?: { label: string; href: string }[];
  /** 配图路径（放在 public/figures/ 下）。留空会显示一个"图位"提示 */
  figure?: string;
  figureCaption?: string;
  /** 详情页补充说明（可留空） */
  details?: string[];
};

export const projects: Project[] = [
  /* ---------------- 科研经历 ---------------- */
  {
    id: 'uav-fire-rescue',
    title: 'Physics-Aware UAV Trajectory Design for Mission-Driven Fire Rescue',
    group: 'Research',
    lab: 'ICElab, SUSTech',
    role: 'Undergraduate Researcher · First author',
    advisors: ['Prof. Xiaoyang Li'],
    period: 'Nov 2025 – Present',
    summary:
      'Designing 3D UAV trajectories for fire-rescue missions, where the wireless channel itself is shaped by heat, smoke and moving rescue units.',
    bullets: [
      'Constructed a fire-specific wireless environment model integrating thermal-plume aerodynamics, mmWave smoke attenuation, receiver noise, and rescue-unit mobility.',
      'Formulated long-term Value of Information (VoI) minimization using Lyapunov optimization and developed a receding-horizon Fire-Aware Trajectory Model Predictive Control (FAT-MPC) framework.',
      'Designed an ATRI-SCA-based solver with penalty binary relaxation for joint 3D UAV trajectory and user-association optimization under dynamic safety constraints; in a 28-GHz multi-UAV network, achieved sub-second per-slot optimization while maintaining VoI below 10.',
    ],
    tags: ['UAV communications', 'mmWave', 'Lyapunov optimization', 'MPC', 'Convex optimization'],
    links: [
      // TODO: 代码开源后填这里，例如 { label: 'Code', href: 'https://github.com/3uanL/xxx' }
    ],
    figure: '',
    figureCaption:
      'Suggested figure: the FAT-MPC framework overview, or the trajectory vs. smoke-plume comparison plot.',
  },
  {
    id: 'isac-beamforming',
    title: 'Safety-Prioritized ISAC Beamforming for Human-Robot Collaborative Smart Factories',
    group: 'Research',
    lab: 'ICElab, SUSTech',
    role: 'Undergraduate Researcher',
    advisors: ['Prof. Xiaoyang Li'],
    period: 'Jul 2026 – Present',
    summary:
      'Integrated sensing and communication (ISAC) beamforming where human safety outranks every other sensing target.',
    bullets: [
      'Formulated semantic sensing QoS tiers (human > robot ≥ obstacle) for ISAC downlink beamforming, jointly considering human-safety priorities and per-robot communication-rate constraints.',
      'Developed semidefinite-relaxation, robust S-procedure, SCA, and CRB-based formulations to optimize transmit power and characterize sensing-communication trade-offs.',
      'Demonstrated that prioritized human sensing can be guaranteed with only a small transmit-power premium over uniform sensing requirements.',
    ],
    tags: ['ISAC', 'Beamforming', 'SDR', 'Robust optimization', 'CRB'],
    links: [],
    figure: '',
    figureCaption: 'Suggested figure: sensing-QoS-tier illustration, or the power–trade-off curve.',
  },
  {
    id: 'magnetic-dipole-pinn',
    title: 'Physics-Informed Residual Network for Magnetic Dipole Model Correction',
    group: 'Research',
    lab: 'Guolab, SUSTech',
    role: 'Undergraduate Researcher',
    advisors: ['Prof. Shuxiang Guo'],
    period: 'Mar 2025 – Dec 2025',
    summary:
      'A physics-informed network that corrects the magnetic dipole model so that capsule robots can be tracked in the real world, not just in simulation.',
    bullets: [
      'Built a dual-branch physics-informed residual network combining convolutional features, pose-aware physics encoding, gated fusion, and a divergence-free magnetic-field regularizer.',
      'Integrated magnetic-field correction with Levenberg-Marquardt pose estimation and lookup-table compensation for high-accuracy sim-to-real localization.',
      'Reduced mean positioning error from 2.10 to 1.15 mm (45.2%) and orientation error from 3.23° to 1.01° (68.7%), while maintaining 22.4 FPS real-time performance.',
    ],
    tags: ['Physics-informed learning', 'Sim-to-real', 'Magnetic localization', 'Pose estimation'],
    links: [],
    figure: '',
    figureCaption: 'Suggested figure: the dual-branch network architecture.',
  },
  {
    id: 'differential-magnetic-sensing',
    title: 'Differential Magnetic Sensing with Dynamic Background Calibration',
    group: 'Research',
    lab: 'Guolab, SUSTech',
    role: 'Undergraduate Researcher',
    advisors: ['Prof. Shuxiang Guo'],
    period: 'Sep 2025 – Nov 2025',
    summary:
      'Suppressing common-mode magnetic interference with differential sensing plus a Kalman-filter background model.',
    bullets: [
      'Developed differential magnetic sensing for common-mode interference suppression and Kalman-filter-based dynamic background estimation in time-varying environments.',
      'Applied a distance-adaptive weighted LM-GN hybrid optimizer to balance near-field model error and far-field convergence for capsule-robot localization.',
      'Achieved 2.52 mm RMS positioning and 2.97° orientation accuracy on a 5×5 triaxial magnetometer array at 200 Hz, reducing positioning error by 59.4% and accelerating convergence by 40.6% over conventional baselines.',
    ],
    tags: ['Magnetic sensing', 'Kalman filter', 'LM-GN optimizer', 'Localization'],
    links: [],
    figure: '',
    figureCaption: 'Suggested figure: the 5×5 sensor array setup, or the error-reduction comparison.',
  },
  {
    id: 'kresling-capsule',
    title: 'Kresling-Origami Soft Capsule Robot',
    group: 'Research',
    lab: 'Guolab, SUSTech',
    role: 'Undergraduate Researcher',
    advisors: ['Prof. Shuxiang Guo'],
    period: 'Oct 2025 – Present',
    summary:
      'Origami-inspired capsule geometry and magnetically actuated gaits for confined gastrointestinal environments.',
    bullets: [
      'Developed Kresling capsule geometry and mechanical models in SolidWorks and investigated magnetically actuated gait sequences for confined gastrointestinal environments.',
      'Participated in prototype fabrication and motion-characterization experiments.',
    ],
    tags: ['Soft robotics', 'Origami design', 'SolidWorks', 'Magnetic actuation'],
    links: [],
    figure: '',
    figureCaption: 'Suggested figure: the Kresling geometry or a gait-sequence snapshot.',
  },

  /* ---------------- 竞赛 / 课程项目 ---------------- */
  {
    id: 'huawei-localization',
    title: 'Huawei Crowdsourced Offline High-Precision Localization Challenge',
    group: 'Selected',
    role: 'Algorithm development',
    period: '2026',
    summary:
      'Turning noisy crowdsourced BLE observations into robust location estimates — with a strict leakage-free validation pipeline.',
    bullets: [
      'Modeled noisy crowdsourced BLE observations using RSSI, scan-position accuracy, confidence, location source, device identity, and temporal information, generating robust location candidates through path-loss models, pairwise RSSI ranking, and geometric-median estimation.',
      'Developed a dual-pipeline candidate ranking and fusion framework with source-specific candidates, group-wise LambdaRank, Top-3/60 m ENU fusion, and a safety gate for adaptive model selection.',
      'Built a leakage-free nested 5-fold OOF evaluation pipeline, achieving 89.66% (763/851) within 30 m and CEP90 = 30.86 m, reducing CEP90 by 17.6% and approaching the 90% target within three cases.',
    ],
    tags: ['BLE localization', 'Learning to rank', 'Ensemble', 'Cross-validation'],
    links: [],
    figure: '',
    figureCaption: 'Suggested figure: the dual-pipeline fusion architecture.',
  },
  {
    id: 'cumcm-2025',
    title: 'UAV Smoke-Screen Interference Deployment Optimization (CUMCM 2025)',
    group: 'Selected',
    role: 'Team member · National First Prize',
    period: 'Sep 2025',
    summary:
      'A mathematical-modeling competition problem: place UAV smoke screens so incoming targets are occluded as long as possible.',
    bullets: [
      'Developed kinematic and geometric occlusion models for UAVs, smoke-screen payloads, incoming targets, and protected objects through time-discretized physical simulation.',
      'Designed simulated annealing, particle swarm optimization, and hybrid PSO-SA algorithms for single- and multi-UAV deployment, increasing effective occlusion duration from 1.39 s to 20.80 s in the multi-UAV/multi-target scenario.',
    ],
    tags: ['Mathematical modeling', 'Simulated annealing', 'PSO', 'Geometry'],
    links: [],
    figure: '',
    figureCaption: 'Suggested figure: the occlusion geometry, or the deployment layout.',
  },
];

export const researchProjects = projects.filter((p) => p.group === 'Research');
export const selectedProjects = projects.filter((p) => p.group === 'Selected');
