(() => {
  "use strict";

  const pageView = document.getElementById("pageView");
  const breadcrumb = document.getElementById("breadcrumb");
  const overlayHost = document.getElementById("overlayHost");
  const toastHost = document.getElementById("toastHost");
  const userMenu = document.getElementById("userMenu");
  const userMenuButton = document.getElementById("userMenuButton");
  const demoDock = document.getElementById("demoDock");

  const en = {
    "工作空间": "Workspace",
    "模块首页": "Module home",
    "AI 生成": "AI generation",
    "线下数据上传": "Offline data uploads",
    "审批协作": "Approval collaboration",
    "审批工作台": "Approval workbench",
    "审批控制中心": "Approval control center",
    "管理": "Admin",
    "系统运行正常": "All systems operational",
    "所有服务可用": "All services available",
    "帮助中心": "Help center",
    "待办提醒": "Notifications",
    "返回模块首页": "Back to module home",
    "个人信息与权限": "Profile and permissions",
    "切换为普通用户预览": "Switch to standard user preview",
    "切换为管理员预览": "Switch to administrator preview",
    "切换为管理员视图": "Switched to administrator view",
    "切换为普通用户视图，仅管理员模块已隐藏": "Switched to standard user view; admin modules are hidden",
    "退出登录": "Sign out",
    "金融数据管理部": "Finance Data Department",
    "原型状态预览": "Prototype state preview",
    "切换当前页面的数据状态": "Switch the data state for this page",
    "正常": "Normal",
    "空态": "Empty",
    "失败态": "Failed",
    "重置演示状态": "Reset demo states",
    "状态演示": "State demo",
    "关闭": "Close",
    "取消": "Cancel",
    "确认": "Confirm",
    "保存": "Save",
    "编辑": "Edit",
    "删除": "Delete",
    "查看": "View",
    "预览": "Preview",
    "下载": "Download",
    "引用": "Link",
    "刷新": "Refresh",
    "操作": "Actions",
    "返回": "Back",
    "返回列表": "Back to list",
    "返回清单": "Back to list",
    "返回报表底表清单": "Back to report list",
    "返回 Validation 列表": "Back to Validation list",
    "提交人": "Submitted by",
    "提交时间": "Submitted at",
    "当前审批人": "Current approver",
    "当前审批人：": "Current approver:",
    "当前节点：": "Current node:",
    "当前节点 · 等待审批": "Current node · Awaiting approval",
    "当前节点 / Market": "Current node / Market",
    "状态 / 当前节点": "Status / Current node",
    "加载中": "Loading",
    "刚刚": "Just now",
    "进行中": "In progress",
    "尚未到达": "Not reached",
    "已选报表，请完善 AI 分析配置": "Report selected. Complete the AI configuration.",
    "当前账号尚未开通任何业务模块权限，请联系系统管理员开通后使用。": "No business modules are available. Contact your administrator to request access.",
    "暂无可用模块": "No modules available",
    "联系管理员": "Contact administrator",
    "联系开发": "Contact development",
    "下午好，林妍": "Good afternoon, Lin Yan",
    "选择业务模块开始工作。平台今日已同步 PUMA 数据 248 条，当前有 9 项任务需要你的关注。": "Select a business module to start. PUMA synced 248 records today, and 9 tasks need your attention.",
    "业务模块": "Business modules",
    "报告分析": "Report analysis",
    "报表分析底表": "Report base tables",
    "Reporting 报表分析底表": "Reporting base tables",
    "Validation 校验规则生成": "Validation rule generation",
    "线下数据上传管理": "Offline data management",
    "从 PUMA 拉取并管理报表底表，基于 Workbook 与报送文件生成 BRD、FSD、SQL 和伪代码。": "Sync and manage report base tables from PUMA, then generate BRD, FSD, SQL, and pseudocode from Workbook and submitted files.",
    "结合监管发文与线下计算逻辑，为 RRIS 报表生成可复核、可调整的 Validation 规则。": "Generate reviewable and editable Validation rules for RRIS reports using regulatory documents and offline calculation logic.",
    "统一管理本地报送文件、定时捞取任务与入库结果，为分析提供可信数据输入。": "Manage local regulatory files, scheduled ingestion jobs, and load results in one place.",
    "集中处理报表与校验规则审批，查看快照、审批链路和回传状态，保障每次变更可追溯。": "Review report and rule approvals, inspect snapshots, approval chains, and callback status with a full audit trail.",
    "按 Market 配置模块审批流程、节点顺序和审批人，支持版本化与流程启停管理。": "Configure market-specific approval workflows, node order, and approvers with versioning and enablement controls.",
    "待办": "Pending",
    "仅管理员": "Admin only",
    "数据访问受 Workbook 权限与 Market 范围共同控制": "Data access is governed by Workbook permissions and Market scope",
    "报表底表清单": "Report base tables",
    "报表详情": "Report details",
    "管理从 PUMA 同步的报表底表，跟踪 AI 生成状态与最近同步时间。": "Manage report base tables synced from PUMA and track AI generation status and last sync time.",
    "重新拉取": "Refresh from PUMA",
    "新增报表": "Add report",
    "全部 Market": "All Markets",
    "全部任务状态": "All task statuses",
    "全部报送频度": "All frequencies",
    "全部生成状态": "All generation statuses",
    "报送频度": "Reporting frequency",
    "任务状态": "Task status",
    "AI 生成状态": "AI generation status",
    "暂无报表底表记录": "No report base records",
    "点击【新增报表】从 PUMA 选择需要分析的报表底表。": "Select Add report to choose a report base table from PUMA.",
    "未找到匹配的报表底表": "No matching report base tables",
    "调整筛选条件，或从 PUMA 新增报表底表。": "Adjust the filters or add a report base table from PUMA.",
    "共 ": "Total ",
    "条记录": " records",
    "条 RRIS": " RRIS",
    "条规则": " rules",
    "条任务": " tasks",
    "条上传记录": " upload records",
    "个定时任务": " scheduled jobs",
    "个单元格": " cells",
    "个可用模块": " modules available",
    "条讨论": " comments",
    "每页 ": "Rows per page ",
    " 条": "",
    "上一页": "Previous page",
    "下一页": "Next page",
    "生成中/已生成/审批中不可删除": "Cannot delete while generating, generated, or in approval",
    "查看详情": "View details",
    "删除报表底表": "Delete report base table",
    "删除后该 record 将从清单移除，PUMA 源数据不受影响；确认删除？": "The record will be removed from this list. PUMA source data will not be affected. Delete it?",
    "确认删除": "Delete",
    "报表底表已从清单移除，PUMA 源数据未变更": "Report base table removed. PUMA source data was not changed.",
    "PUMA 报表拉取失败": "PUMA report sync failed",
    "数据源连接超时（PUMA_GATEWAY_TIMEOUT），本次未覆盖已有清单。请检查数据源状态后重新拉取。": "The PUMA gateway timed out and the existing list was not overwritten. Check the data source and retry.",
    "无法获取报表底表": "Unable to load report base tables",
    "拉取过程中未收到 PUMA 的完整响应，为避免误导，本次不展示空列表。错误原因：PUMA_GATEWAY_TIMEOUT。": "A complete PUMA response was not received. An empty list is hidden to avoid misinterpretation. Error: PUMA_GATEWAY_TIMEOUT.",
    "已触发 PUMA 增量拉取，预计 30 秒完成": "PUMA incremental sync started. Estimated time: 30 seconds.",
    "已触发 RRIS 表单同步": "RRIS form sync started",
    "从 PUMA 选择报表底表": "Select report base tables from PUMA",
    "仅展示当前账号有权限访问的报送 record": "Showing only report records accessible to your account",
    "新增并配置": "Add and configure",
    "PUMA 报送底表": "PUMA report base",
    "监管报送规则": "Regulatory report rules",
    "复制 record_id": "Copy record_id",
    "复制 rris_id": "Copy rris_id",
    "报表分析": "Report analysis",
    "报表分析配置": "Report analysis configuration",
    "Reporting AI 分析配置": "Reporting AI configuration",
    "为当前 record 配置数据范围与分析附件，发起后将进入 AI 生成流程。": "Configure the data scope and analysis attachments for this record before starting AI generation.",
    "分析配置": "Analysis configuration",
    "带 * 为必填项": "Fields marked * are required",
    "数据范围 data_scope": "Data scope (data_scope)",
    "请选择数据范围": "Select a data scope",
    "HK 全量监管报送": "HK full regulatory reporting",
    "集团资金业务": "Group treasury business",
    "零售银行与财富管理": "Retail banking and wealth management",
    "未指定，将使用 Workbook 全量数据": "If left blank, all Workbook data will be used",
    "附件挂载": "Attachments",
    "支持 XLSX / CSV / PDF，单文件 ≤ 50 MB": "XLSX, CSV, or PDF; up to 50 MB per file",
    "引用 PUMA 历史报送数据": "Use historical PUMA submission",
    "上传本地报送文件": "Upload local submission file",
    "移除附件": "Remove attachment",
    "附件将用于补全业务口径；引用 PUMA 数据不会改变源数据": "Attachments help complete the business definitions. Referencing PUMA data does not change source data.",
    "发起生成后将锁定当前配置，生成结果可在 Reporting 详情中查看。": "The configuration will be locked after generation. Results are available in Reporting details.",
    "发起生成": "Start generation",
    "Workbook 候选表": "Workbook candidate tables",
    "本人 Owner · 只读": "Owned by me · Read only",
    "搜索表名或表 ID": "Search table name or ID",
    "仅展示 BDM / HUB 表": "BDM / HUB tables only",
    "仅可选择本人 Owner 的 BDM / HUB 表；权限由 Workbook 统一控制": "Only BDM / HUB tables owned by you are available. Access is governed by Workbook permissions.",
    "附件已移除": "Attachment removed",
    "已打开 PUMA 历史报送批次选择器": "PUMA historical submission picker opened",
    "发起 AI 分析生成": "Start AI analysis",
    "系统将使用当前数据范围、附件与 Workbook 候选表生成分析结果。生成过程中页面将锁定，预计耗时 2–5 分钟。": "The system will use the configured scope, attachments, and Workbook candidates. The page will be locked for 2–5 minutes.",
    "已人工复核数据范围与附件口径": "I have reviewed the data scope and attachment definitions",
    "生成中": "Generating",
    "正在生成 AI 分析内容": "Generating AI analysis",
    "正在解析报送文件并生成 BRD、FSD、SQL 与伪代码，请勿关闭页面。": "Parsing submitted files and generating BRD, FSD, SQL, and pseudocode. Do not close this page.",
    "生成中，请勿关闭页面": "Generating. Do not close this page.",
    "AI 分析生成完成，已进入待确认状态": "AI analysis completed and is pending confirmation",
    "AI 分析生成失败": "AI analysis failed",
    "附件字段映射失败：无法识别 LCR_Adj_Amount 的币种口径。可补充数据字典后重新发起。": "Attachment field mapping failed: the currency definition for LCR_Adj_Amount could not be identified. Add a data dictionary and retry.",
    "重新发起": "Retry",
    "报表分析底表详情": "Report base table details",
    "查看审批链路": "View approval chain",
    "发起审批": "Submit for approval",
    "单元格总数": "Total cells",
    "已生成内容": "Generated content",
    "待补充": "Needs input",
    "单元格分析结果": "Cell analysis results",
    "点击任意单元格查看 BRD / FSD / SQL / 伪代码": "Open any cell to view BRD, FSD, SQL, and pseudocode",
    "内容完整度": "Completeness",
    "单元格": "Cell",
    "业务字段口径": "Business field definition",
    "BRD 内容详情": "BRD details",
    "FSD 内容详情": "FSD details",
    "SQL 脚本": "SQL script",
    "伪代码": "Pseudocode",
    "本单元格未产出 BRD 内容": "No BRD content was generated for this cell",
    "本单元格未产出 FSD 内容": "No FSD content was generated for this cell",
    "复制 BRD": "Copy BRD",
    "复制 FSD": "Copy FSD",
    "复制 SQL": "Copy SQL",
    "复制伪代码": "Copy pseudocode",
    "复制表达式": "Copy expression",
    "评论": "Comments",
    "补充数据口径说明，或 @ 同事参与确认": "Add a data definition note or @ a colleague for review",
    "Enter 换行 · 评论将同步至审批链路": "Enter for a new line · Comments sync to the approval trail",
    "发表评论": "Post comment",
    "评论已发表": "Comment posted",
    "请输入评论内容": "Enter a comment",
    "审批已完成，评论仅可查看，不可新增。": "Approval is complete. Comments are read-only.",
    "已复制到剪贴板": "Copied to clipboard",
    "复制失败，请手动选择内容": "Copy failed. Select the content manually.",
    "当前内容为空，无法复制": "There is no content to copy",
    "非法操作": "Invalid action",
    "数据已刷新": "Data refreshed",
    "Validation 校验规则": "Validation rules",
    "校验规则": "Validation rules",
    "校验规则生成": "Validation rule generation",
    "以 RRIS 为单位生成监管校验规则，支持人工复核、调整与审批。": "Generate regulatory validation rules by RRIS, with manual review, adjustment, and approval.",
    "搜索 rris_id / report_name": "Search rris_id / report_name",
    "暂无 Validation 表单": "No Validation forms",
    "当前 Market 暂无 RRIS 表单，请从 PUMA 重新拉取。": "No RRIS forms are available for this Market. Refresh from PUMA.",
    "未找到匹配的 Validation 表单": "No matching Validation forms",
    "调整筛选条件，或重新从 PUMA 拉取 RRIS 表单。": "Adjust the filters or refresh RRIS forms from PUMA.",
    "RRIS 表单拉取失败": "RRIS form sync failed",
    "PUMA 返回结构校验异常（ERR_RESPONSE_SCHEMA）。已保留上次成功同步结果，请稍后重试。": "PUMA returned a schema validation error (ERR_RESPONSE_SCHEMA). The last successful result is retained; retry later.",
    "无法获取 RRIS 表单": "Unable to load RRIS forms",
    "拉取过程中 PUMA 返回结构校验异常，本次不展示空列表，以避免误判数据为空。错误原因：ERR_RESPONSE_SCHEMA。": "PUMA returned a schema validation error. An empty list is hidden to prevent a false empty state. Error: ERR_RESPONSE_SCHEMA.",
    "发起 Validation": "Start Validation",
    "该 RRIS 已完成生成": "Validation is already generated for this RRIS",
    "报送频度缺失，请先在 PUMA 补齐": "Reporting frequency is missing. Complete it in PUMA first.",
    "该 RRIS 正在生成规则，请稍候": "Validation rules are being generated. Please wait.",
    "生成完成后可进入详情": "Details are available after generation",
    "该 RRIS 尚未生成 Validation 规则": "Validation rules have not been generated for this RRIS",
    "进入详情": "Open details",
    "Validation 规则配置": "Validation rule configuration",
    "上传监管发文与线下计算逻辑，配置本次规则生成范围。": "Upload regulatory documents and offline calculation logic, then configure the generation scope.",
    "规则生成配置": "Rule generation configuration",
    "生成后可在详情页人工调整": "Rules can be adjusted on the details page after generation",
    "报表范围 target_report_scope": "Report scope (target_report_scope)",
    "如：MAS 651 表 A/B/C，留空则使用全量": "e.g. MAS 651 Tables A/B/C. Leave blank to use all data.",
    "规则依据附件": "Supporting attachments",
    "REG_DOC 推荐上传最新版本": "Latest REG_DOC is recommended",
    "上传监管发文（REG_DOC）": "Upload REG_DOC",
    "上传线下计算逻辑": "Upload calculation logic",
    "缺少监管发文": "Regulatory document missing",
    "规则口径可能不完整。建议至少上传一份 REG_DOC 后再发起生成。": "Rule definitions may be incomplete. Upload at least one REG_DOC before generation.",
    "未上传 REG_DOC 仍可生成，但规则口径完整度可能下降。": "Generation can continue without REG_DOC, but rule completeness may be lower.",
    "规则生成失败": "Rule generation failed",
    "监管发文解析超时：REG_DOC 第 4 页表格结构无法识别，请检查文件完整性后重新发起。": "Regulatory document parsing timed out: the table on page 4 of REG_DOC could not be recognized. Check the file and retry.",
    "发起 Validation 规则生成": "Generate Validation rules",
    "系统将解析监管发文、线下计算逻辑与 Workbook 候选表，生成可人工调整的校验规则。": "The system will parse the regulatory document, calculation logic, and Workbook candidates to generate editable validation rules.",
    "已人工复核报表范围与规则依据": "I have reviewed the report scope and rule sources",
    "正在生成 Validation 规则": "Generating Validation rules",
    "正在解析监管发文、计算逻辑与 Workbook 候选表，请勿关闭页面。": "Parsing the regulatory document, calculation logic, and Workbook candidates. Do not close this page.",
    "规则生成完成，可在详情中人工复核": "Rules generated. Review them on the details page.",
    "规则详情": "Rule details",
    "校验规则详情": "Validation rule details",
    "规则总数": "Total rules",
    "已人工调整": "Manually adjusted",
    "待处理评论": "Open comments",
    "版本 v2 · 生成于": "Version v2 · Generated at",
    "审批快照已锁定": "Approval snapshot locked",
    "可编辑": "Editable",
    "校验规则清单": "Validation rule list",
    "行内修改后自动标记为“已人工调整”，并记录前后值": "Inline edits are marked as Manually adjusted and record before/after values",
    "待确认": "Pending confirmation",
    "展开详情": "Open details",
    "审批已提交，当前规则为只读快照": "Approval submitted. Rules are now a read-only snapshot.",
    "本次未生成规则": "No rules were generated",
    "请检查输入文件、Workbook 候选表与报表范围后重试。": "Check the input files, Workbook candidates, and report scope, then retry.",
    "提交审批": "Submit for approval",
    "该任务已进入审批流程": "This task is already in approval",
    "确认提交审批": "Confirm approval submission",
    "提交后当前 Validation 规则将生成只读审批快照，全部字段与评论不可再修改。确认提交？": "Submitting will create a read-only approval snapshot. All fields and comments will be locked. Continue?",
    "已人工复核口径与规则表达式": "I have reviewed the rule definitions and expressions",
    "已提交审批，当前规则快照已锁定": "Submitted for approval. The rule snapshot is now locked.",
    "规则表达式": "Rule expression",
    "业务说明": "Business description",
    "全字段": "All fields",
    "修改历史": "Change history",
    "修改前": "Before",
    "修改后": "After",
    "数据来源": "Data source",
    "数据来源：": "Data source:",
    "当前行已进入编辑状态": "The row is ready for editing",
    "已保存修改并标记为“已人工调整”": "Changes saved and marked as Manually adjusted",
    "线下数据上传管理": "Offline data uploads",
    "管理本地报送文件、定时捞取任务及数据入库结果。": "Manage local regulatory files, scheduled ingestion jobs, and data load results.",
    "上传文件": "Upload file",
    "上传记录": "Upload records",
    "定时任务": "Scheduled jobs",
    "暂无上传记录": "No upload records",
    "点击上传文件，将线下报送数据纳入平台管理。": "Upload a file to bring offline regulatory data into the platform.",
    "暂无定时任务": "No scheduled jobs",
    "创建定时任务后，系统将按周期从源路径自动捞取文件。": "Create a scheduled job to automatically fetch files from a source path.",
    "存在数据入库异常": "Data load issues detected",
    "定时任务「SG 信贷敞口快照」连续 2 次因源路径不可访问失败，请检查账号权限。": "Scheduled job \"SG Credit Exposure Snapshot\" failed twice because the source path is inaccessible. Check the service account permissions.",
    "查看详情": "View details",
    "查看详情": "View details",
    "文件名 / 文件 ID": "File name / File ID",
    "大小": "Size",
    "上传人": "Uploaded by",
    "上传时间": "Uploaded at",
    "来源类型": "Source",
    "入库结果": "Load result",
    "本地上传": "Local upload",
    "定时捞取": "Scheduled ingestion",
    "成功": "Success",
    "失败": "Failed",
    "任务名称": "Job name",
    "源路径": "Source path",
    "执行周期": "Schedule",
    "目标 Workbook": "Target Workbook",
    "启停": "Status",
    "上次执行时间 / 结果": "Last run / Result",
    "立即执行": "Run now",
    "执行记录": "Run history",
    "路径告警": "Path alert",
    "源路径不可访问 · Permission denied": "Source path inaccessible · Permission denied",
    "定时任务将按配置周期自动从源路径捞取文件": "Scheduled jobs fetch files from the source path automatically",
    "新增定时任务": "Add scheduled job",
    "占用": "Usage",
    "启用": "Enable",
    "停用": "Disable",
    "上传报送文件": "Upload submission file",
    "文件将进入当前 Workbook 的待入库区": "The file will be staged for loading into the current Workbook",
    "拖拽文件到此处，或点击选择": "Drag a file here or click to select",
    "支持 XLSX、CSV、PDF，单文件最大 50 MB": "Supports XLSX, CSV, and PDF up to 50 MB",
    "数据日期": "Data date",
    "备注": "Notes",
    "选填，说明文件来源或口径变更": "Optional: source or definition change notes",
    "开始上传": "Start upload",
    "文件已上传，正在校验字段结构": "File uploaded. Validating its field structure.",
    "正在预览文件前 100 行": "Previewing the first 100 rows",
    "下载任务已创建": "Download task created",
    "已引用该文件至当前分析配置": "File linked to the current analysis configuration",
    "新增定时任务": "Add scheduled job",
    "系统将按执行周期从源路径自动捞取文件": "The system will fetch files from the source path on schedule",
    "如：HK 总账日终数据": "e.g. HK GL end-of-day data",
    "源路径需当前服务账号具备读取权限": "The service account needs read access to the source path",
    "执行周期 cron": "Schedule (cron)",
    "创建后立即启用": "Enable after creation",
    "创建任务": "Create job",
    "定时任务已创建": "Scheduled job created",
    "已提交立即执行请求": "Run-now request submitted",
    "正在打开执行记录": "Opening run history",
    "审批控制中心": "Approval control center",
    "按 Market 配置 Reporting / Validation 审批流程与节点审批人。": "Configure Reporting and Validation approval workflows and approvers by Market.",
    "新增流程": "Add workflow",
    "搜索流程名称": "Search workflow name",
    "流程配置": "Workflow configuration",
    "流程已启用": "Workflow enabled",
    "流程已禁用": "Workflow disabled",
    "禁用后不可被新任务引用，在途任务继续": "Disabled workflows cannot be used by new tasks; in-flight tasks continue",
    "基础信息": "Basic information",
    "流程名称": "Workflow name",
    "适用模块": "Applicable modules",
    "全部": "All",
    "审批节点": "Approval nodes",
    "拖拽调整顺序，至少保留 1 个节点": "Drag to reorder. Keep at least one node.",
    "节点名称": "Node name",
    "审批人": "Approver",
    "添加节点": "Add node",
    "发布新版本后，新任务将自动引用最新配置": "After publishing, new tasks automatically use the latest configuration",
    "新审批节点": "New approval node",
    "删除节点": "Delete node",
    "审批节点至少保留 1 个节点": "At least one approval node is required",
    "流程已禁用，新任务将不可引用": "Workflow disabled. New tasks cannot reference it.",
    "流程已启用，保存后生效": "Workflow enabled. Save to apply.",
    "未保存修改已撤销": "Unsaved changes were reverted",
    "已添加审批节点": "Approval node added",
    "审批节点已删除": "Approval node deleted",
    "审批节点顺序已更新，保存后生效": "Approval node order updated. Save to apply.",
    "审批流程已保存并发布新版本": "Approval workflow saved and published as a new version",
    "新增审批流程": "Add approval workflow",
    "创建后可在流程详情中继续添加审批节点": "After creation, add approval nodes in the workflow details",
    "请输入流程名称": "Enter a workflow name",
    "创建流程": "Create workflow",
    "审批流程已创建": "Approval workflow created",
    "请完善流程名称与审批节点": "Complete the workflow name and approval nodes",
    "流程名称不能为空": "Workflow name is required",
    "业务复核": "Business review",
    "口径审批": "Definition approval",
    "合规终审": "Compliance final review",
    "临时数据分析快速审批": "Temporary analysis fast approval",
    "直属主管审批": "Direct manager approval",
    "数据复核": "Data review",
    "运营审批": "Operations approval",
    "监管口径审批": "Regulatory definition review",
    "负责人终审": "Final owner review",
    "本地复核": "Local review",
    "区域终审": "Regional final review",
    "审批工作台": "Approval workbench",
    "集中处理报表与 Validation 规则审批，查看快照、链路及回传结果。": "Handle report and Validation approvals, inspect snapshots, approval chains, and callback results.",
    "我的任务": "My tasks",
    "待办任务": "To-do tasks",
    "审批任务": "Approval tasks",
    "搜索任务 ID / 报表名称": "Search task ID / report name",
    "暂无待办任务": "No to-do tasks",
    "暂无提交任务": "No submitted tasks",
    "当前没有需要你审批的任务。": "There are no tasks awaiting your approval.",
    "发起报表或规则审批后，可在此跟踪进度。": "Submit a report or rule for approval to track its progress here.",
    "任务ID": "Task ID",
    "状态": "Status",
    "当前节点": "Current node",
    "通过": "Approve",
    "驳回": "Reject",
    "撤回": "Withdraw",
    "任务已进入审批，无法撤回": "The task is already in approval and cannot be withdrawn",
    "只读快照": "Read-only snapshot",
    "评论汇总": "Comment summary",
    "审批链路": "Approval chain",
    "报表底表快照": "Report base table snapshot",
    "规则快照": "Rule snapshot",
    "附件：": "Attachments:",
    "规则总数：": "Total rules:",
    "人工调整": "Manually adjusted",
    "BRD / FSD：": "BRD / FSD:",
    "回传失败 · 等待重试": "Callback failed · Retry pending",
    "回传重试": "Retry callback",
    "审批信息": "Approval information",
    "流程：": "Workflow:",
    "流程已完成": "Workflow completed",
    "预计 SLA：": "Expected SLA:",
    "任务提交": "Task submitted",
    "通过 · 口径与附件已完成核对": "Approved · Definitions and attachments verified",
    "当前节点 · 等待审批": "Current node · Awaiting approval",
    "驳回任务": "Reject task",
    "驳回意见将同步给提交人与流程中的相关成员": "The rejection reason will be shared with the submitter and relevant participants",
    "驳回意见": "Rejection reason",
    "请填写明确的驳回原因与修改建议": "Provide a clear reason and recommended changes",
    "请填写驳回意见后再提交。": "Enter a rejection reason before continuing.",
    "确认驳回": "Reject",
    "任务已驳回，意见已同步给提交人": "Task rejected. The reason was shared with the submitter.",
    "确认通过任务": "Confirm task approval",
    "已核对任务快照与附件口径": "I have reviewed the task snapshot and attachment definitions",
    "确认通过": "Approve",
    "审批已通过，任务已流转至下一节点": "Approved. The task has moved to the next node.",
    "已发起回传重试，正在等待 PUMA 响应": "Callback retry started. Waiting for PUMA.",
    "个人信息与权限面板（原型演示）": "Profile and permission panel (prototype)",
    "已退出当前演示账号": "Signed out of the demo account",
    "当前账号无审批控制中心权限": "This account does not have access to Approval control center",
    "当前原型仅展示第 1 页数据": "This prototype shows page 1 only",
    "已生成权限申请入口，请联系管理员确认": "Access request created. Contact an administrator to approve it.",
    "文件选择器已打开（原型演示）": "File picker opened (prototype)",
    "已打开 PUMA 历史报送批次选择器": "PUMA historical submission picker opened",
    "已选择": "Selected",
    "未发起": "Not initiated",
    "未生成": "Not generated",
    "生成中": "Generating",
    "已生成": "Generated",
    "已生成(待确认)": "Generated (pending confirmation)",
    "已生成（待确认）": "Generated (pending confirmation)",
    "审批中": "In approval",
    "已通过": "Approved",
    "已驳回": "Rejected",
    "已回传": "Returned",
    "失败": "Failed",
    "频度缺失": "Frequency missing",
    "已人工调整": "Manually adjusted",
    "已禁用": "Disabled"
    ,
    "AI 报表分析": "AI Reports",
    "数据资产": "Data assets",
    "AI 分析配置": "AI configuration",
    "共": "Total",
    "每页": "Per page",
    "条": "",
    "同步于": "Synced",
    "（选填）": "(optional)",
    "搜索 record ID / 报表名称": "Search record ID / report name",
    "流动性覆盖率周汇总 · 18 字段": "LCR weekly summary · 18 fields",
    "总账余额日快照 · 42 字段": "GL balance daily snapshot · 42 fields",
    "资金头寸与期限分布 · 26 字段": "Treasury position and maturity profile · 26 fields",
    "信贷风险敞口月度快照 · 31 字段": "Credit exposure monthly snapshot · 31 fields",
    "条规则 · 点击行可展开全字段与修改历史": "rules · Open a row for all fields and change history",
    "个单元格 · 当前展示 5 个": " cells · 5 currently shown",
    "请完善 AI 分析配置": "Complete the AI configuration",
    "生成内容与业务口径": "Generated content and business definition",
    "已选择报表底表": "Report base table selected",
    "已选报表": "Report selected",
    "系统建议）": "system suggestion)",
    "人工确认）": "manually confirmed)",
    "表样模板与版本": "Template and version",
    "上传表样决定 Report detail 的 Web Excel 展示结构": "The uploaded template controls the Web Excel layout on Report details",
    "当前": "Current",
    "个工作表": " worksheets",
    "制度批次": "Policy batch",
    "上传新版本": "Upload new version",
    "版本记录": "Version history",
    "制度升级后可上传新版表样；历史表样与逻辑版本永久保留，可在详情页查询和对比": "Upload a new template after a policy update. Historical templates and logic versions remain available for query and comparison.",
    "工作表 / 单元格": "Sheets / Cells",
    "已映射内容": "Mapped content",
    "待复核单元格": "Cells to review",
    "版本与逻辑": "Versions and logic",
    "下载表样": "Download template",
    "右键单元格查看 BRD / FSD 明细；双击同样可打开": "Right-click a cell to view BRD / FSD; double-click also opens details",
    "AI 已映射": "AI mapped",
    "AI 生成结果 · 只读": "AI output · Read only",
    "单元格已选择": "Cell selected",
    "当前模板不可新增工作表": "New worksheets cannot be added to this template",
    "就绪": "Ready",
    "选择：": "Selection:",
    "Web Excel 预览由上传表样驱动，行列、合并单元格和公式位置与源文件保持一致。": "The Web Excel preview is driven by the uploaded template, preserving rows, columns, merged cells, and formula positions.",
    "表样模板版本与逻辑记录": "Template versions and logic records",
    "按制度生效日期倒序": "Ordered by policy effective date",
    "当前表样": "Current template",
    "当前逻辑版本": "Current logic version",
    "最近生效": "Effective since",
    "搜索版本号 / 逻辑版本 / 制度批次": "Search version, logic version, or policy batch",
    "当前生效": "Current",
    "历史版本": "Historical",
    "逻辑": "Logic",
    "查看表样": "View template",
    "逻辑差异": "Logic changes",
    "当前逻辑版本变更": "Current logic version changes",
    "新增": "Added",
    "修改": "Changed",
    "映射": "Mapping",
    "二级 B 资产 50% haircut 校验，并检查可流通性与排除资产标记。": "Added a 50% haircut validation for Level 2B assets, including liquidity and exclusion checks.",
    "HQLA 二级资产占比上限由 45% 调整为 40%，同步更新 C12 与 C13 公式。": "The Level 2 asset cap changed from 45% to 40%; C12 and C13 formulas were updated.",
    "新增币种折算列 E，引用当日报送汇率 LCR_FX_RATE_20261031。": "Added FX conversion column E using LCR_FX_RATE_20261031.",
    "上传新版表样模板": "Upload a new template",
    "制度升级后可并行保留旧版表样、源文件与映射逻辑": "After a policy update, historical templates, source files, and mapping logic are retained",
    "拖拽新版 XLSX 表样到此处，或点击选择": "Drag a new XLSX template here or click to select",
    "系统将自动识别工作表、合并单元格、公式与命名区域": "The system will detect worksheets, merged cells, formulas, and named ranges",
    "新版本号": "New version",
    "制度生效日期": "Policy effective date",
    "逻辑版本": "Logic version",
    "变更说明": "Change description",
    "依据 HKMA 2026-Q4 制度修订，新增流动性资产排除项与币种折算校验列。": "Added liquidity asset exclusions and FX conversion checks based on the HKMA 2026-Q4 policy update.",
    "上传后设为当前生效版本，并重新发起 AI 映射": "Make this the current version and run AI mapping again",
    "旧版本不会被覆盖；已提交审批的报表继续引用原版本快照": "Historical versions are never overwritten; approved reports continue to use their original version snapshots.",
    "上传并创建版本": "Upload and create version",
    "新版表样文件选择器已打开（原型演示）": "New template file picker opened (prototype)",
    "正在查看表样": "Viewing template",
    "表样文件下载任务已创建": "Template download task created",
    "返回最新版本": "Back to latest version",
    "已切换至最新表样版本": "Switched to the latest template version",
    "查看 SQL / 伪代码": "View SQL / pseudocode",
    "复制单元格值": "Copy cell value",
    "查看当前逻辑版本": "View current logic version",
    "本单元格未产出伪代码": "No pseudocode was generated for this cell",
    "请输入新版本号": "Enter a new version number"
  };

  const enPatterns = [
    [/^最近同步 (.+)$/, "Last synced $1"],
    [/^更新于 (.+)$/, "Updated $1"],
    [/^同步于 (.+)$/, "Synced $1"],
    [/^生效 (.+)$/, "Effective $1"],
    [/^逻辑差异 (\d+)$/, "Logic changes $1"],
    [/^(.+) · 更新于 (.+)$/, "$1 · Updated $2"],
    [/^版本 v2 · 生成于 (.+) · 可编辑$/, "Version v2 · Generated at $1 · Editable"],
    [/^版本 v2 · 生成于 (.+) · 审批快照已锁定$/, "Version v2 · Generated at $1 · Approval snapshot locked"],
    [/^AI 模型 (.+) · 生成于 (.+)$/, "AI model $1 · Generated at $2"],
    [/^表样 (.+) · 逻辑 (.+) · 生成于 (.+)$/, "Template $1 · Logic $2 · Generated at $3"],
    [/^正在查看历史表样 (.+)$/, "Viewing historical template $1"],
    [/^当前展示逻辑版本 (.+)，仅用于查询与对比。最新版本为 (.+)。$/, "Displaying logic version $1 for query and comparison. Latest version: $2."],
    [/^已切换至表样 (.+)$/, "Switched to template $1"],
    [/^表样 (.+) 已上传并创建逻辑版本$/, "Template $1 uploaded and a logic version was created"],
    [/^已加载 (.+) 与当前逻辑版本的差异$/, "Loaded differences between $1 and the current logic version"],
    [/^正在查看表样 (.+)$/, "Viewing template $1"],
    [/^(.+) · 当前$/, "$1 · Current"],
    [/^(\d+) 个工作表$/, "$1 worksheets"],
    [/^(\d+) 个单元格$/, "$1 cells"],
    [/^制度批次 (.+)$/, "Policy batch $1"],
    [/^(.+) · 逻辑版本 (.+)$/, "$1 · Logic version $2"],
    [/^(.+) · 生成内容与业务口径$/, "$1 · Generated content and business definition"],
    [/^PUMA 批次 · (.+)$/, "PUMA batch · $1"],
    [/^本地上传 · (.+)$/, "Local upload · $1"],
    [/^线下上传 · (.+)$/, "Offline upload · $1"],
    [/^已入库 (.+) 行$/, "Loaded $1 rows"],
    [/^已入库 (.+)$/, "Loaded $1"],
    [/^字段 (.+) 存在 (.+) 条空值$/, "$2 null values found in $1"],
    [/^口径审批 \/ (.+)$/, "Definition approval / $1"],
    [/^数据复核 \/ (.+)$/, "Data review / $1"],
    [/^显示 (\d+) 条记录$/, "Showing $1 records"],
    [/^显示 (\d+) 条 RRIS$/, "Showing $1 RRIS"],
    [/^显示 (\d+) 条$/, "Showing $1"],
    [/^共 (\d+) 个可用模块$/, "$1 modules available"],
    [/^(\d+) 节点 · (.+)$/, "$1 nodes · $2"],
    [/^(\d+) 条讨论$/, "$1 comments"],
    [/^评论 \((\d+)\)$/, "Comments ($1)"],
    [/^修改历史 \((\d+)\)$/, "Change history ($1)"],
    [/^附件已关联 (\d+) 个单元格$/, "$1 cells linked"],
    [/^已关联 (\d+) 个单元格$/, "$1 cells linked"],
    [/^本次未生成规则$/, "No rules were generated"],
    [/^规则 (\S+)$/, "Rule $1"],
    [/^单元格 (\S+)$/, "Cell $1"],
    [/^任务 (\S+) 将进入下一审批节点，本次审批意见与时间将记录在审批链路中。$/, "Task $1 will move to the next node. The decision and timestamp will be recorded in the approval trail."]
  ];

  function translateString(value) {
    if (state.lang !== "en" || !/[一-龥]/.test(value)) return value;
    const trimmed = value.trim();
    if (Object.prototype.hasOwnProperty.call(en, trimmed)) {
      return value.replace(trimmed, en[trimmed]);
    }
    for (const [pattern, replacement] of enPatterns) {
      if (pattern.test(trimmed)) return value.replace(trimmed, trimmed.replace(pattern, replacement));
    }
    return value;
  }

  const sourceText = new WeakMap();
  const translatedAttributes = new WeakMap();
  const translatedAttributeNames = ["placeholder", "aria-label", "data-tooltip", "title"];

  function applyTranslations(root = document) {
    const scope = root.nodeType === Node.TEXT_NODE ? root.parentElement : root;
    if (!scope || scope.closest?.(".no-translate")) return;

    const walker = document.createTreeWalker(scope, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.nodeValue?.trim()) return NodeFilter.FILTER_REJECT;
        const parent = node.parentElement;
        if (!parent || parent.closest("script, style, textarea, .no-translate")) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((node) => {
      if (!sourceText.has(node)) sourceText.set(node, node.nodeValue);
      const original = sourceText.get(node);
      node.nodeValue = state.lang === "en" ? translateString(original) : original;
    });

    scope.querySelectorAll?.("*").forEach((element) => {
      let attrSources = translatedAttributes.get(element);
      if (!attrSources) {
        attrSources = {};
        translatedAttributes.set(element, attrSources);
      }
      translatedAttributeNames.forEach((name) => {
        if (!element.hasAttribute(name)) return;
        if (!(name in attrSources)) attrSources[name] = element.getAttribute(name);
        const original = attrSources[name];
        element.setAttribute(name, state.lang === "en" ? translateString(original) : original);
      });
    });
  }

  const state = {
    lang: (() => {
      try {
        const queryLanguage = new URLSearchParams(location.search).get("lang");
        if (queryLanguage === "en" || queryLanguage === "zh") return queryLanguage;
        return localStorage.getItem("validation-ui-lang") === "zh" ? "zh" : "en";
      } catch {
        return "en";
      }
    })(),
    role: "admin",
    demoState: "normal",
    reportSheet: "g01",
    reportTemplateVersion: "v2026.03.31",
    reportRows: [
      {
        record_id: "CNHSBC006A-20260331",
        rris_id: "RRIS-CN-G01-2026Q1",
        report_name: "G01 Asset & Liability Notes",
        report_freq: "Quarterly",
        market: "CN",
        ai_gen_status: "已生成",
        last_sync_puma_time: "2026-04-01 09:42:18",
        create_time: "2026-03-31 18:20:04"
      },
      {
        record_id: "REC-SG-240819-0042",
        rris_id: "RRIS-SG-09731",
        report_name: "MAS 651 大额风险敞口",
        report_freq: "Monthly",
        market: "SG",
        ai_gen_status: "未发起",
        last_sync_puma_time: "2026-11-19 09:42:18",
        create_time: "2026-11-18 15:08:31"
      },
      {
        record_id: "REC-HK-240819-0021",
        rris_id: "RRIS-HK-11877",
        report_name: "资本充足率月度报送底表",
        report_freq: "Monthly",
        market: "HK",
        ai_gen_status: "审批中",
        last_sync_puma_time: "2026-11-19 09:42:18",
        create_time: "2026-11-18 11:34:56"
      },
      {
        record_id: "REC-JP-240818-0015",
        rris_id: "RRIS-JP-04418",
        report_name: "海外分支流动性压力测试表",
        report_freq: "Weekly",
        market: "JP",
        ai_gen_status: "失败",
        last_sync_puma_time: "2026-11-19 08:12:04",
        create_time: "2026-11-17 17:26:19"
      },
      {
        record_id: "REC-HK-240818-0009",
        rris_id: "RRIS-HK-11796",
        report_name: "外汇风险敞口周报",
        report_freq: "Weekly",
        market: "HK",
        ai_gen_status: "生成中",
        last_sync_puma_time: "2026-11-19 09:42:18",
        create_time: "2026-11-18 09:15:43"
      },
      {
        record_id: "REC-SG-240816-0034",
        rris_id: "RRIS-SG-09688",
        report_name: "新加坡分行信贷资产质量季报",
        report_freq: "Quarterly",
        market: "SG",
        ai_gen_status: "已通过",
        last_sync_puma_time: "2026-11-18 18:20:33",
        create_time: "2026-11-16 14:11:08"
      }
    ],
    validationRows: [
      {
        rris_id: "RRIS-CN-G01-2026Q1",
        report_name: "G01 Asset & Liability Notes",
        report_freq: "Quarterly",
        market: "CN",
        last_sync_puma_time: "2026-04-01 09:43:02",
        ai_gen_status: "已生成"
      },
      {
        rris_id: "RRIS-SG-09731",
        report_name: "MAS 651 大额风险敞口",
        report_freq: "Monthly",
        market: "SG",
        last_sync_puma_time: "2026-11-19 09:43:02",
        ai_gen_status: "未生成"
      },
      {
        rris_id: "RRIS-HK-11888",
        report_name: "核心一级资本缓冲季度测算",
        report_freq: "",
        market: "HK",
        last_sync_puma_time: "2026-11-19 09:43:02",
        ai_gen_status: "未生成"
      },
      {
        rris_id: "RRIS-JP-04418",
        report_name: "海外分支流动性压力测试表",
        report_freq: "Weekly",
        market: "JP",
        last_sync_puma_time: "2026-11-19 08:15:28",
        ai_gen_status: "生成中"
      },
      {
        rris_id: "RRIS-SG-09688",
        report_name: "新加坡分行信贷资产质量季报",
        report_freq: "Quarterly",
        market: "SG",
        last_sync_puma_time: "2026-11-18 18:22:15",
        ai_gen_status: "审批中"
      }
    ],
    workflows: [
      {
        id: "wf-hk-01",
        market: "HK",
        name: "香港监管报送标准审批",
        modules: ["Reporting", "Validation"],
        enabled: true,
        version: "v3.4",
        updated: "2026-11-18 17:06",
        nodes: [
          { name: "业务复核", approver: "陈思远 · 金融数据部" },
          { name: "口径审批", approver: "许文清 · 风险控制部" },
          { name: "合规终审", approver: "周安 · 合规管理部" }
        ]
      },
      {
        id: "wf-hk-02",
        market: "HK",
        name: "临时数据分析快速审批",
        modules: ["Reporting"],
        enabled: true,
        version: "v1.8",
        updated: "2026-11-12 10:32",
        nodes: [
          { name: "直属主管审批", approver: "梁嘉敏 · 金融数据部" }
        ]
      },
      {
        id: "wf-sg-01",
        market: "SG",
        name: "新加坡分行双人复核",
        modules: ["Reporting", "Validation"],
        enabled: true,
        version: "v2.1",
        updated: "2026-11-15 14:25",
        nodes: [
          { name: "数据复核", approver: "Audrey Tan · SG Finance" },
          { name: "运营审批", approver: "Marcus Lim · SG Operations" }
        ]
      },
      {
        id: "wf-sg-02",
        market: "SG",
        name: "MAS 季报专项流程",
        modules: ["Validation"],
        enabled: false,
        version: "v1.2",
        updated: "2026-10-29 09:18",
        nodes: [
          { name: "监管口径审批", approver: "Janice Koh · SG Compliance" },
          { name: "负责人终审", approver: "Marcus Lim · SG Operations" }
        ]
      },
      {
        id: "wf-jp-01",
        market: "JP",
        name: "东京分行流动性审批",
        modules: ["Reporting", "Validation"],
        enabled: true,
        version: "v1.5",
        updated: "2026-11-08 16:40",
        nodes: [
          { name: "本地复核", approver: "佐藤 健 · Tokyo Finance" },
          { name: "区域终审", approver: "林妍 · 金融数据部" }
        ]
      }
    ],
    selectedWorkflow: "wf-hk-01",
    workbenchTab: "mine",
    uploadTab: "uploads",
    uploadedFiles: [
      {
        name: "HKMA_LCR_Manual_202611.xlsx",
        id: "FILE-20261119-0908",
        size: "2.8 MB",
        uploader: "林妍",
        time: "2026-11-19 09:08:34",
        source: "本地上传",
        result: "成功",
        reason: "已入库 12,804 行"
      },
      {
        name: "SG_Credit_Risk_Override.csv",
        id: "FILE-20261119-0831",
        size: "842 KB",
        uploader: "系统",
        time: "2026-11-19 08:31:09",
        source: "定时捞取",
        result: "失败",
        reason: "字段 market_code 存在 18 条空值"
      },
      {
        name: "JP_Treasury_Adj_Q4.xlsx",
        id: "FILE-20261118-1747",
        size: "4.1 MB",
        uploader: "佐藤健",
        time: "2026-11-18 17:47:52",
        source: "本地上传",
        result: "成功",
        reason: "已入库 26,119 行"
      }
    ],
    submitted: false,
    adjustedRules: 2,
    cellReadonly: false
  };

  const statusMap = {
    "未发起": "neutral",
    "未生成": "neutral",
    "生成中": "blue",
    "已生成": "green",
    "已生成(待确认)": "green",
    "已生成（待确认）": "green",
    "审批中": "orange",
    "已通过": "green-deep",
    "已驳回": "red",
    "已回传": "purple",
    "失败": "red"
  };

  const icon = (name) => `<svg aria-hidden="true"><use href="#i-${name}"></use></svg>`;

  function escapeHTML(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function pill(status, extra = "") {
    const tone = statusMap[status] || "neutral";
    const spinning = status === "生成中" ? " spinning" : "";
    return `<span class="pill pill-${tone}${spinning} ${extra}">${escapeHTML(status)}</span>`;
  }

  function market(mark) {
    return `<span class="market-chip"><i class="market-dot ${String(mark).toLowerCase()}"></i>${escapeHTML(mark)}</span>`;
  }

  function disabledAction(label, reason, extraClass = "") {
    return `<span class="tooltip-wrap" data-tooltip="${escapeHTML(reason)}" tabindex="0"><button class="row-link ${extraClass}" type="button" disabled>${escapeHTML(label)}</button></span>`;
  }

  function emptyIllustration(type = "table") {
    if (type === "module") {
      return `
        <svg class="empty-illustration" viewBox="0 0 180 132" aria-hidden="true">
          <rect x="38" y="28" width="104" height="76" rx="10" fill="#fff" stroke="#dfe3e9" stroke-width="1.5"/>
          <rect x="51" y="42" width="28" height="28" rx="6" fill="#fff3f4" stroke="#f0c8cc"/>
          <rect x="88" y="42" width="40" height="7" rx="3.5" fill="#e8ebef"/>
          <rect x="88" y="55" width="29" height="6" rx="3" fill="#eff1f4"/>
          <rect x="51" y="79" width="77" height="6" rx="3" fill="#eef0f3"/>
          <circle cx="132" cy="98" r="24" fill="#fff" stroke="#ead9db" stroke-width="1.5"/>
          <path d="M122 98h20M132 88v20" stroke="#c52f3d" stroke-width="2.4" stroke-linecap="round"/>
        </svg>`;
    }
    if (type === "task") {
      return `
        <svg class="empty-illustration" viewBox="0 0 180 132" aria-hidden="true">
          <rect x="46" y="23" width="88" height="92" rx="9" fill="#fff" stroke="#dfe3e9" stroke-width="1.5"/>
          <path d="M67 50h46M67 64h46M67 78h30" stroke="#e1e5ea" stroke-width="4" stroke-linecap="round"/>
          <circle cx="127" cy="98" r="22" fill="#f1faf5" stroke="#cfe8da"/>
          <path d="m117 98 7 7 13-14" fill="none" stroke="#2e8b57" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`;
    }
    return `
      <svg class="empty-illustration" viewBox="0 0 180 132" aria-hidden="true">
        <path d="M56 24h53l24 24v68H56z" fill="#fff" stroke="#dfe3e9" stroke-width="1.5"/>
        <path d="M109 25v24h24" fill="#f7f8fa" stroke="#dfe3e9" stroke-width="1.5"/>
        <rect x="71" y="57" width="47" height="6" rx="3" fill="#e8ebef"/>
        <rect x="71" y="70" width="35" height="6" rx="3" fill="#eff1f4"/>
        <rect x="71" y="83" width="42" height="6" rx="3" fill="#eff1f4"/>
        <circle cx="124" cy="98" r="22" fill="#fff" stroke="#ead9db" stroke-width="1.5"/>
        <path d="M115 98h18M124 89v18" stroke="#c52f3d" stroke-width="2.2" stroke-linecap="round"/>
      </svg>`;
  }

  function renderEmpty(title, copy, buttonLabel, action, type = "table") {
    return `
      <div class="empty-table-state">
        ${emptyIllustration(type)}
        <h3>${escapeHTML(title)}</h3>
        <p>${escapeHTML(copy)}</p>
        <button class="btn btn-primary" type="button" data-action="${action}">${icon("plus")}${escapeHTML(buttonLabel)}</button>
      </div>`;
  }

  function renderPageHeader(title, copy, actions = "") {
    return `
      <div class="page-heading">
        <div><h1>${escapeHTML(title)}</h1><p>${escapeHTML(copy)}</p></div>
        <div class="page-heading-actions">${actions}</div>
      </div>`;
  }

  function renderHome() {
    if (state.demoState === "empty") {
      return `
        <section class="page empty-page">
          <div class="empty-card">
            ${emptyIllustration("module")}
            <h2>暂无可用模块</h2>
            <p>当前账号尚未开通任何业务模块权限，请联系系统管理员开通后使用。</p>
            <button class="btn btn-primary" type="button" data-action="contact-admin">${icon("help")}联系管理员</button>
          </div>
        </section>`;
    }

    const modules = [
      {
        route: "#reporting",
        icon: "report",
        title: "Reporting 报表分析底表",
        copy: "从 PUMA 拉取并管理报表底表，基于 Workbook 与报送文件生成 BRD、FSD、SQL 和伪代码。",
        tone: "red",
        pending: 6,
        meta: "PUMA · WORKBOOK · 6 RECORDS"
      },
      {
        route: "#validation",
        icon: "validation",
        title: "Validation 校验规则生成",
        copy: "结合监管发文与线下计算逻辑，为 RRIS 报表生成可复核、可调整的 Validation 规则。",
        tone: "green",
        pending: 3,
        meta: "RRIS · RULE ENGINE · 3 PENDING"
      },
      {
        route: "#uploads",
        icon: "upload",
        title: "线下数据上传管理",
        copy: "统一管理本地报送文件、定时捞取任务与入库结果，为分析提供可信数据输入。",
        tone: "blue",
        meta: "FILE · CRON · INGESTION"
      },
      {
        route: "#workbench",
        icon: "approval",
        title: "审批工作台",
        copy: "集中处理报表与校验规则审批，查看快照、审批链路和回传状态，保障每次变更可追溯。",
        tone: "orange",
        pending: 7,
        meta: "TO-DO · APPROVAL · CALLBACK"
      },
      {
        route: "#workflows",
        icon: "settings",
        title: "审批控制中心",
        copy: "按 Market 配置模块审批流程、节点顺序和审批人，支持版本化与流程启停管理。",
        tone: "purple",
        admin: true,
        meta: "ADMIN · WORKFLOW · VERSION"
      }
    ];

    return `
      <section class="page">
        <div class="home-hero">
          <div class="home-hero-copy">
            <div class="eyebrow">Workspace / ${state.role === "admin" ? "Administrator" : "Analyst"}</div>
            <h1>下午好，林妍</h1>
            <p>选择业务模块开始工作。平台今日已同步 PUMA 数据 248 条，当前有 9 项任务需要你的关注。</p>
          </div>
          <div class="hero-context">
            <div><span>MARKET</span><strong>CN</strong></div>
            <div><span>WORKBOOK</span><strong>CN-••••-006A</strong></div>
            <div><span>ROLE</span><strong>${state.role === "admin" ? "ADMIN" : "ANALYST"}</strong></div>
          </div>
        </div>
        <div class="section-heading">
          <h2>业务模块</h2>
          <p>共 ${state.role === "admin" ? 5 : 4} 个可用模块</p>
        </div>
        <div class="module-grid">
          ${modules
            .filter((item) => !item.admin || state.role === "admin")
            .map(
              (item) => `
              <a class="module-card ${item.admin ? "admin-module" : ""}" href="${item.route}" data-tone="${item.tone}">
                <div class="module-top">
                  <span class="module-icon">${icon(item.icon)}</span>
                  <span class="module-badges">
                    ${item.admin ? '<span class="module-admin">仅管理员</span>' : ""}
                    ${item.pending ? `<span class="module-pending">待办 <b>${item.pending}</b></span>` : ""}
                  </span>
                </div>
                <h3>${item.title}</h3>
                <p>${item.copy}</p>
                <div class="module-bottom">
                  <span class="module-meta">${item.meta}</span>
                  <span class="module-open">${icon("chevron-right")}</span>
                </div>
              </a>`
            )
            .join("")}
        </div>
        <div class="home-footnote">
          <span>${icon("shield")} 数据访问受 Workbook 权限与 Market 范围共同控制</span>
          <span class="mono">LAST ACCESS · 2026-11-19 15:42 CST</span>
        </div>
      </section>`;
  }

  function reportActions(row) {
    const canDelete = ["未发起", "失败"].includes(row.ai_gen_status);
    return `
      <div class="row-actions aligned row-actions--report">
        <button class="row-link" type="button" data-action="open-report" data-record="${row.record_id}">${icon("eye")}查看详情</button>
        ${
          canDelete
            ? `<button class="row-link danger" type="button" data-action="delete-report" data-record="${row.record_id}">${icon("trash")}删除</button>`
            : disabledAction("删除", "生成中/已生成/审批中不可删除", "danger")
        }
      </div>`;
  }

  function filteredReportRows() {
    const query = (document.getElementById("reportSearch")?.value || "").trim().toLowerCase();
    const marketValue = document.getElementById("reportMarketFilter")?.value || "";
    const statusValue = document.getElementById("reportStatusFilter")?.value || "";
    return state.reportRows.filter((row) => {
      const matchesQuery = !query || `${row.record_id} ${row.rris_id} ${row.report_name}`.toLowerCase().includes(query);
      const matchesMarket = !marketValue || row.market === marketValue;
      const matchesStatus = !statusValue || row.ai_gen_status === statusValue;
      return matchesQuery && matchesMarket && matchesStatus;
    });
  }

  function reportTableBody() {
    const rows = filteredReportRows();
    if (!rows.length) {
      return `<tr><td colspan="9">${renderEmpty("未找到匹配的报表底表", "调整筛选条件，或从 PUMA 新增报表底表。", "新增报表", "new-report")}</td></tr>`;
    }
    return rows
      .map(
        (row) => `
        <tr data-report-row="${row.record_id}">
          <td><span class="id-cell">${row.record_id}<button class="copy-icon" type="button" data-action="copy" data-copy="${row.record_id}" data-tooltip="复制 record_id" aria-label="复制 record_id">${icon("copy")}</button></span></td>
          <td class="mono">${row.rris_id}</td>
          <td><div class="report-cell"><strong>${row.report_name}</strong><span>PUMA 报送底表</span></div></td>
          <td><span class="mono">${row.report_freq}</span></td>
          <td>${market(row.market)}</td>
          <td>${pill(row.ai_gen_status)}</td>
          <td><span class="mono text-secondary">${row.last_sync_puma_time}</span></td>
          <td><span class="mono text-tertiary">${row.create_time}</span></td>
          <td class="action-cell">${reportActions(row)}</td>
        </tr>`
      )
      .join("");
  }

  function renderReporting() {
    const isFailed = state.demoState === "failed";
    const isEmpty = state.demoState === "empty";
    return `
      <section class="page">
        ${renderPageHeader(
          "报表底表清单",
          "管理从 PUMA 同步的报表底表，跟踪 AI 生成状态与最近同步时间。",
          `<span class="sync-meta">${icon("clock")}最近同步 2026-11-19 09:42:18</span>
           <button class="btn" type="button" data-action="sync-reporting">${icon("refresh")}重新拉取</button>
           <button class="btn btn-primary" type="button" data-action="new-report">${icon("plus")}新增报表</button>`
        )}
        ${
          isFailed
            ? `<div class="alert-banner">
                <span class="alert-icon">${icon("alert")}</span>
                <div class="alert-copy"><strong>PUMA 报表拉取失败</strong><p>数据源连接超时（PUMA_GATEWAY_TIMEOUT），本次未覆盖已有清单。请检查数据源状态后重新拉取。</p></div>
                <div class="alert-actions"><button class="btn btn-small" type="button" data-action="sync-reporting">${icon("refresh")}重新拉取</button></div>
              </div>`
            : ""
        }
        <div class="filter-card">
          <div class="search-field">${icon("search")}<input class="input" id="reportSearch" type="search" placeholder="搜索 record ID / 报表名称" autocomplete="off"></div>
          <select class="select" id="reportMarketFilter" aria-label="Market 筛选">
            <option value="">全部 Market</option><option>CN</option><option>HK</option><option>SG</option><option>JP</option>
          </select>
          <select class="select wide" id="reportStatusFilter" aria-label="任务状态筛选">
            <option value="">全部任务状态</option><option>未发起</option><option>生成中</option><option>已生成</option><option>审批中</option><option>已通过</option><option>失败</option>
          </select>
          <span class="filter-result">显示 ${isEmpty ? 0 : state.reportRows.length} 条记录</span>
        </div>
        <div class="data-card">
          ${
            isEmpty
              ? renderEmpty("暂无报表底表记录", "点击【新增报表】从 PUMA 选择需要分析的报表底表。", "新增报表", "new-report")
              : isFailed
                ? `<div class="failure-table-state">
                    <span class="failure-icon">${icon("alert")}</span>
                    <h3>无法获取报表底表</h3>
                    <p>拉取过程中未收到 PUMA 的完整响应，为避免误导，本次不展示空列表。错误原因：PUMA_GATEWAY_TIMEOUT。</p>
                    <button class="btn btn-primary" type="button" data-action="sync-reporting">${icon("refresh")}重新拉取</button>
                  </div>`
                : `<div class="table-wrap">
                    <table class="data-table" aria-label="报表底表清单">
                      <thead><tr>
                        <th>record_id</th><th>rris_id</th><th>report_name</th><th>report_freq</th><th>market</th><th>ai_gen_status</th><th>last_sync_puma_time</th><th>create_time</th><th class="action-cell">操作</th>
                      </tr></thead>
                      <tbody id="reportTableBody">${reportTableBody()}</tbody>
                    </table>
                  </div>
                  <div class="table-footer">
                    <span class="table-total">共 <strong>${state.reportRows.length}</strong> 条记录</span>
                    <div class="pagination">
                      <button type="button" disabled aria-label="上一页">${icon("back")}</button>
                      <button class="active" type="button">1</button>
                      <button type="button" data-action="page-preview">2</button>
                      <button type="button" data-action="page-preview" aria-label="下一页">${icon("chevron-right")}</button>
                      <span class="page-size">每页 <select aria-label="每页条数"><option>20</option><option>50</option></select> 条</span>
                    </div>
                  </div>`
          }
        </div>
      </section>`;
  }

  function renderSummary(items) {
    return `<div class="summary-strip">${items
      .map((item) => `<div class="summary-item"><span>${item.label}</span><strong class="${item.sans ? "sans" : ""}">${item.value}</strong></div>`)
      .join("")}</div>`;
  }

  function candidateTables() {
    const en = state.lang === "en";
    const localized = (zh, english) => (en ? english : zh);
    return `
      <div class="candidate-card">
        <div class="card-title-row">
          <div><h2>Workbook 候选表</h2><span class="card-title-meta">${localized("G01 贷款质量数据域 · 只读", "G01 loan-quality data domain · Read only")}</span></div>
          <span class="badge-count">4</span>
        </div>
        <div class="candidate-toolbar">
          <div class="search-field">${icon("search")}<input class="input" id="candidateSearch" type="search" placeholder="搜索表名或表 ID" autocomplete="off"></div>
        </div>
        <div class="candidate-summary"><span>${localized("仅展示 BDM / HUB 表", "BDM / HUB tables only")}</span><span>09:42</span></div>
        <div class="candidate-list" id="candidateList">
          <div class="candidate-row"><span class="table-kind">ADM</span><div class="candidate-info"><strong>ADM_LON_VAROIOUS</strong><span>${localized("贷款质量事实与逾期字段 · 本次主数据源", "Loan-quality facts and overdue fields · Primary source")}</span></div><span class="candidate-end">CN</span></div>
          <div class="candidate-row"><span class="table-kind">ADM</span><div class="candidate-info"><strong>ADM_PUB_BRANCH_LEVEL_INFO_BRANCH</strong><span>${localized("境内机构范围与层级核验 · 22 字段", "Domestic entity scope and hierarchy checks · 22 fields")}</span></div><span class="candidate-end">CN</span></div>
          <div class="candidate-row"><span class="table-kind">BDM</span><div class="candidate-info"><strong>BDM_PUB_BRANCH</strong><span>${localized("机构主数据与国别映射 · 14 字段", "Entity master data and country mapping · 14 fields")}</span></div><span class="candidate-end">CN</span></div>
          <div class="candidate-row"><span class="table-kind">HUB</span><div class="candidate-info"><strong>HUB_LOAN_QUALITY_FACT</strong><span>${localized("贷款五级分类汇总快照 · 19 字段", "Five-category loan-quality snapshot · 19 fields")}</span></div><span class="candidate-end">CN</span></div>
        </div>
        <div class="locked-note">${icon("lock")}${localized("权限由 Workbook 统一控制；实际取数逻辑见 StarRocks 映射工作表", "Access is governed by Workbook permissions. See the StarRocks Mapping sheet for transformation logic.")}</div>
      </div>`;
  }

  const templateVersions = [
    {
      version: "v2026.03.31",
      fileName: "20260331_withAI.xlsx",
      status: "current",
      policy: "G01 Asset and Liability Statement 2026-Q1",
      policyBatch: "PBOC-G01-2026Q1",
      logicVersion: "G01-LOGIC-201",
      effectiveDate: "2026-03-31",
      uploadedAt: "2026-04-01 09:18",
      uploader: "林妍",
      cells: 53,
      sheets: 5,
      changeCount: 4
    },
    {
      version: "v2025.12.31",
      fileName: "20251231_G01_Base.xlsx",
      status: "archived",
      policy: "G01 2025-Q4 annual template",
      policyBatch: "PBOC-G01-2025Q4",
      logicVersion: "G01-LOGIC-198",
      effectiveDate: "2025-12-31",
      uploadedAt: "2026-01-04 10:12",
      uploader: "梁嘉敏",
      cells: 51,
      sheets: 5,
      changeCount: 2
    },
    {
      version: "v2025.09.30",
      fileName: "20250930_G01_Base.xlsx",
      status: "archived",
      policy: "Overdue loan definition supplement",
      policyBatch: "PBOC-G01-2025Q3FIX",
      logicVersion: "G01-LOGIC-194",
      effectiveDate: "2025-09-30",
      uploadedAt: "2025-10-08 11:40",
      uploader: "陈思远",
      cells: 49,
      sheets: 5,
      changeCount: 1
    },
    {
      version: "v2025.06.30",
      fileName: "20250630_G01_Base.xlsx",
      status: "archived",
      policy: "G01 2025-Q2 base template",
      policyBatch: "PBOC-G01-2025Q2",
      logicVersion: "G01-LOGIC-190",
      effectiveDate: "2025-06-30",
      uploadedAt: "2025-07-03 10:05",
      uploader: "林妍",
      cells: 47,
      sheets: 5,
      changeCount: 3
    }
  ];

  const loanQualityRows = [
    {
      line: 1,
      cell: "C6",
      zh: "1.各项贷款",
      en: "1. Total loans",
      value: "3,738,652.17",
      formula: "=SUM(C7,C10)",
      output: "total_loans",
      logicZh: "下级正常贷款与不良贷款合计，舍入后相加。",
      logicEn: "Sum performing and non-performing loans after their lower-level amounts are rounded.",
      descZh: "各项贷款",
      descEn: "Total loans"
    },
    {
      line: 2,
      cell: "C7",
      zh: "  1.1正常贷款",
      en: "  1.1 Performing loans",
      value: "3,709,101.07",
      formula: "=SUM(C8,C9)",
      output: "performing_loans",
      logicZh: "正常类与关注类合计。",
      logicEn: "Normal loans plus special-mention loans.",
      descZh: "正常贷款",
      descEn: "Performing loans"
    },
    {
      line: 3,
      cell: "C8",
      zh: "        1.1.1正常类",
      en: "        1.1.1 Normal",
      value: "3,631,700.56",
      formula: "3631700.56",
      output: "normal_loans",
      logicZh: "loan_grade='01'；SUM(loan_bal_cny)/10000，保留两位。",
      logicEn: "Filter loan_grade = '01'; calculate SUM(loan_bal_cny) / 10,000 and round to two decimals.",
      descZh: "正常类贷款",
      descEn: "Normal loans"
    },
    {
      line: 4,
      cell: "C9",
      zh: "        1.1.2关注类",
      en: "        1.1.2 Special mention",
      value: "77,400.51",
      formula: "77400.51",
      output: "special_mention_loans",
      logicZh: "loan_grade='02'；SUM(loan_bal_cny)/10000，保留两位。",
      logicEn: "Filter loan_grade = '02'; calculate SUM(loan_bal_cny) / 10,000 and round to two decimals.",
      descZh: "关注类贷款",
      descEn: "Special-mention loans"
    },
    {
      line: 5,
      cell: "C10",
      zh: "  1.2不良贷款",
      en: "  1.2 Non-performing loans",
      value: "29,551.10",
      formula: "=SUM(C11,C12,C13)",
      output: "nonperforming_loans",
      logicZh: "次级类、可疑类与损失类合计。",
      logicEn: "Substandard, doubtful, and loss loans combined.",
      descZh: "不良贷款",
      descEn: "Non-performing loans"
    },
    {
      line: 6,
      cell: "C11",
      zh: "        1.2.1次级类",
      en: "        1.2.1 Substandard",
      value: "29,145.00",
      formula: "29145",
      output: "substandard_loans",
      logicZh: "loan_grade='03'；SUM(loan_bal_cny)/10000，保留两位。",
      logicEn: "Filter loan_grade = '03'; calculate SUM(loan_bal_cny) / 10,000 and round to two decimals.",
      descZh: "次级类贷款",
      descEn: "Substandard loans"
    },
    {
      line: 7,
      cell: "C12",
      zh: "        1.2.2可疑类",
      en: "        1.2.2 Doubtful",
      value: "0.00",
      formula: "0",
      output: "doubtful_loans",
      logicZh: "loan_grade='04'；五类固定域关联分类汇总；仅在事实非空、分类完整、键唯一及境内机构核验通过后输出显式 0。",
      logicEn: "Filter loan_grade = '04' and left-join the fixed five-grade domain. Return an explicit zero only after facts, classification completeness, key uniqueness, and domestic-org checks pass.",
      descZh: "可疑类贷款",
      descEn: "Doubtful loans"
    },
    {
      line: 8,
      cell: "C13",
      zh: "        1.2.3损失类",
      en: "        1.2.3 Loss",
      value: "406.10",
      formula: "406.1",
      output: "loss_loans",
      logicZh: "loan_grade='05'；SUM(loan_bal_cny)/10000，保留两位。",
      logicEn: "Filter loan_grade = '05'; calculate SUM(loan_bal_cny) / 10,000 and round to two decimals.",
      descZh: "损失类贷款",
      descEn: "Loss loans"
    },
    {
      line: 9,
      cell: "C14",
      zh: "2.逾期贷款",
      en: "2. Overdue loans",
      value: "68,778.08",
      formula: "68778.08",
      output: "overdue_loans",
      logicZh: "非信用卡 overdue_days>0；信用卡 reserved_field24>0；两类金额合计后 /10000 并保留两位。",
      logicEn: "For non-card loans, use overdue_days > 0. For credit cards, use reserved_field24 > 0. Combine both populations, divide by 10,000, and round to two decimals.",
      descZh: "逾期贷款",
      descEn: "Overdue loans"
    },
    {
      line: 10,
      cell: "C15",
      zh: "  2.1逾期60天以上贷款",
      en: "  2.1 Loans overdue over 60 days",
      value: "13,406.10",
      formula: "13406.1",
      output: "overdue_60_loans",
      logicZh: "非信用卡 overdue_days>60；信用卡 reserved_field24>2；两类金额合计后 /10000 并保留两位。",
      logicEn: "For non-card loans, use overdue_days > 60. For credit cards, use reserved_field24 > 2. Combine both populations, divide by 10,000, and round to two decimals.",
      descZh: "逾期60天以上贷款",
      descEn: "Loans overdue over 60 days"
    },
    {
      line: 11,
      cell: "C16",
      zh: "  2.2逾期90天以上贷款",
      en: "  2.2 Loans overdue over 90 days",
      value: "406.10",
      formula: "406.1",
      output: "overdue_90_loans",
      logicZh: "非信用卡 overdue_days>90；信用卡 reserved_field24>3；两类金额合计后 /10000 并保留两位。",
      logicEn: "For non-card loans, use overdue_days > 90. For credit cards, use reserved_field24 > 3. Combine both populations, divide by 10,000, and round to two decimals.",
      descZh: "逾期90天以上贷款",
      descEn: "Loans overdue over 90 days"
    }
  ];

  const excelCellDocs = Object.fromEntries(
    loanQualityRows.map((row) => [
      row.cell,
      {
        desc: row.descZh,
        descEn: row.descEn,
        brd: `监管报送项：${row.descZh}。本项属于 G01 资产负债项目统计表附注第Ⅱ部分，按境内汇总数据口径填报。`,
        brdEn: `Regulatory filing item: ${row.descEn}. This item belongs to Part II of the G01 Asset and Liability Statement – Notes and is reported on a domestic consolidated basis.`,
        fsd: `数据来源：adm_lon_varoius；数据集：loan_quality；输出字段：${row.output}。计算逻辑：${row.logicZh}`,
        fsdEn: `Source table: adm_lon_varoius. Dataset: loan_quality. Output field: ${row.output}. Calculation: ${row.logicEn}`,
        sql: `SELECT ${row.output}\nFROM loan_quality\nWHERE report_date = '2026-03-31'\n  AND city_code = 'CNHSBC006A';`,
        pseudo: `load loan_quality\napply filing logic for ${row.cell}\nvalidate source completeness and uniqueness\nreturn ${row.output}`
      }
    ])
  );

  function excelCell(value, cellId, className = "", formula = "") {
    const doc = excelCellDocs[cellId];
    const docClass = doc?.brd || doc?.fsd ? "has-doc" : "";
    const description = state.lang === "en" ? doc?.descEn : doc?.desc;
    return `<td class="excel-cell ${docClass} ${className}" data-excel-cell="${cellId}" data-desc="${escapeHTML(description || "")}" data-formula="${escapeHTML(formula || value)}" data-value="${escapeHTML(value)}" tabindex="0">${value}</td>`;
  }

  function renderExcelSheet() {
    const en = state.lang === "en";
    const localized = (zh, english) => (en ? english : zh);

    if (state.reportSheet === "items") {
      return {
        columns: 7,
        title: localized("填报项清单", "Filing Items"),
        body: `
          <tr class="excel-title-row"><td colspan="7">${localized("填报项清单", "Filing Items")}<span class="excel-template-stamp">${state.reportTemplateVersion} · G01</span></td></tr>
          <tr class="excel-head-row"><td>${localized("序号", "No.")}</td><td>${localized("工作表", "Worksheet")}</td><td>${localized("单元格", "Cell")}</td><td>${localized("填报项", "Filing item")}</td><td>${localized("单位", "Unit")}</td><td>${localized("真实报送值", "Submitted value")}</td><td>${localized("复核状态", "Review status")}</td></tr>
          ${loanQualityRows.map((row) => `<tr><td class="excel-center">${row.line}</td><td class="mono">CNHSBC006A-20260331</td><td class="mono excel-center">${row.cell}</td><td>${localized(row.zh, row.en)}</td><td class="excel-center">${localized("万元", "RMB 10k")}</td>${excelCell(row.value, row.cell, "excel-number")}<td class="excel-status excel-status-good">${localized("已复核一致", "Verified")}</td></tr>`).join("")}`
      };
    }

    if (state.reportSheet === "mapping") {
      return {
        columns: 14,
        title: localized("StarRocks 取数映射", "StarRocks Mapping"),
        body: `
          <tr class="excel-title-row"><td colspan="14">${localized("StarRocks 取数映射", "StarRocks Mapping")}<span class="excel-template-stamp">LOAN_QUALITY · ${templateVersions[0].logicVersion}</span></td></tr>
          <tr class="excel-head-row"><td>${localized("序号", "No.")}</td><td>${localized("工作表", "Worksheet")}</td><td>${localized("单元格", "Cell")}</td><td>${localized("填报项", "Filing item")}</td><td>${localized("真实报送值", "Submitted value")}</td><td>${localized("StarRocks结果", "StarRocks result")}</td><td>${localized("复核状态", "Review status")}</td><td>${localized("来源表", "Source table")}</td><td>${localized("关键字段", "Key fields")}</td><td>${localized("计算逻辑", "Calculation logic")}</td><td>SQL</td><td>Dataset</td><td>${localized("输出字段", "Output field")}</td><td>${localized("写入策略", "Write mode")}</td></tr>
          ${loanQualityRows.map((row) => `<tr><td class="excel-center">${row.line}</td><td class="mono">CNHSBC006A-20260331</td><td class="mono excel-center">${row.cell}</td><td>${localized(row.zh, row.en)}</td><td class="excel-number">${row.value}</td><td class="excel-number">${row.value}</td><td class="excel-status excel-status-good">${localized("已复核一致", "Verified")}</td><td class="mono">adm_lon_varoius</td><td>—</td><td class="excel-wrap">${localized(row.logicZh, row.logicEn)}</td><td class="mono">report.sql</td><td class="mono">loan_quality</td><td class="mono">${row.output}</td><td class="mono excel-center">AUTO</td></tr>`).join("")}`
      };
    }

    if (state.reportSheet === "legend") {
      return {
        columns: 2,
        title: localized("标记说明", "Legend"),
        body: `
          <tr class="excel-title-row"><td colspan="2">${localized("标记说明", "Legend")}<span class="excel-template-stamp">G01 · ${state.reportTemplateVersion}</span></td></tr>
          <tr class="excel-head-row"><td>${localized("项目", "Item")}</td><td>${localized("说明", "Description")}</td></tr>
          <tr><td>${localized("生成模式", "Generation mode")}</td><td>${localized("已与该期间报送值比较。", "The generated result has been compared with the value submitted for this period.")}</td></tr>
          <tr><td>${localized("复核一致", "Verified")}</td><td class="excel-number">11</td></tr>
          <tr><td>${localized("候选值不一致", "Candidate mismatch")}</td><td class="excel-number">0</td></tr>
          <tr><td>${localized("待补充数据源", "Pending data source")}</td><td class="excel-number">0</td></tr>`
      };
    }

    if (state.reportSheet === "sql") {
      return {
        columns: 2,
        title: localized("本期 SQL 快照", "SQL Snapshot"),
        body: `
          <tr class="excel-title-row"><td colspan="2">${localized("本期 SQL 快照（可直接执行）", "Current-period SQL snapshot (executable)")}<span class="excel-template-stamp">REPORT.SQL</span></td></tr>
          <tr><td class="mono excel-key-cell">REPORT_DATE</td><td class="mono">2026-03-31</td></tr>
          <tr><td class="mono excel-key-cell">CITY_CODE</td><td class="mono">CNHSBC006A</td></tr>
          <tr><td class="mono excel-key-cell">${localized("数据集", "Dataset")}</td><td class="mono">loan_quality</td></tr>
          <tr class="excel-sql-row"><td colspan="2"><div class="excel-sql-cell"><pre>WITH scope_members AS (
  SELECT DISTINCT branch_code, org_no
  FROM adm_pub_branch_level_info_branch
  WHERE data_dt = '2026-03-31'
    AND branch_level_type = '1'
    AND city_code = 'CNHSBC006A'
), scoped AS (
  SELECT busi_no, busi_org_no, loan_grade, loan_bal_cny,
         overdue_days, business_type, prin_od_amt_cny, reserved_field24
  FROM adm_lon_varoius
  WHERE data_dt = '2026-03-31'
)
SELECT CASE WHEN quality_pass = 1
       THEN normal_loans + special_mention_loans
            + substandard_loans + doubtful_loans + loss_loans
       END AS total_loans,
       CASE WHEN quality_pass = 1 THEN normal_loans END AS normal_loans,
       CASE WHEN quality_pass = 1 THEN special_mention_loans END AS special_mention_loans,
       CASE WHEN quality_pass = 1 THEN substandard_loans END AS substandard_loans,
       CASE WHEN quality_pass = 1 THEN doubtful_loans END AS doubtful_loans,
       CASE WHEN quality_pass = 1 THEN loss_loans END AS loss_loans,
       overdue_rule_total AS overdue_loans,
       overdue_60_loans, overdue_90_loans
FROM gated;</pre></div></td></tr>`
      };
    }

    const totalA = "A";
    return {
      columns: 5,
      title: localized("G01资产负债项目统计表附注", "G01 Asset and Liability Statement – Notes"),
      body: `
        <tr class="excel-title-row"><td colspan="5">${localized("G01资产负债项目统计表附注", "G01 Asset and Liability Statement – Notes")}<span class="excel-template-stamp">AI GENERATED · ${state.reportTemplateVersion}</span></td></tr>
        <tr class="excel-meta-row"><td colspan="5">${localized("报送口径：境内汇总数据", "Reporting scope: Domestic consolidated data")}　${localized("报表日期：2026-03-31", "Report date: March 31, 2026")}　${localized("货币单位：万元", "Currency unit: RMB 10,000")}</td></tr>
        <tr class="excel-section-row"><td colspan="5">${localized("第Ⅱ部分：贷款质量五级分类情况简表", "Part II: Summary of the Five-Category Loan Quality Classification")}</td></tr>
        <tr class="excel-head-row"><td colspan="2">${localized("项目", "Item")}</td><td>${totalA}</td><td colspan="2"></td></tr>
        <tr class="excel-head-row"><td colspan="2"></td><td>${localized("本外币合计", "Domestic and foreign currency total")}</td><td colspan="2"></td></tr>
        ${loanQualityRows.map((row) => `<tr class="${[1,5].includes(row.line) ? "excel-subtotal-row" : ""}"><td class="excel-center">${row.line}</td><td>${localized(row.zh, row.en)}</td>${excelCell(row.value, row.cell, "excel-number excel-formula-fill", row.formula)}<td></td><td></td></tr>`).join("")}
        <tr class="excel-sign-row"><td>${localized("填表人：${U1}", "Prepared by: ${U1}")}</td><td></td><td>${localized("复核人：${U2}", "Reviewed by: ${U2}")}</td><td>${localized("负责人：${U3}", "Approved by: ${U3}")}</td><td></td></tr>
        <tr class="excel-note-row"><td colspan="2">${localized("版本号:201", "Version: 201")}</td><td colspan="3">${localized("蓝色底为含公式区域", "Blue cells contain formulas")}</td></tr>
        <tr class="excel-note-row"><td colspan="5">${localized("数据来源于 20260331_withAI.xlsx；右键公式单元格可查看 BRD / FSD 与 StarRocks 取数逻辑。", "Source: 20260331_withAI.xlsx. Right-click a formula cell to view BRD / FSD and the StarRocks mapping.")}</td></tr>`
    };
  }

  function renderReportingConfig() {
    const en = state.lang === "en";
    const localized = (zh, english) => (en ? english : zh);
    return `
      <section class="page narrow">
        <div class="subpage-heading">
          <button class="back-button" type="button" data-action="go-reporting" aria-label="返回报表底表清单">${icon("back")}</button>
          <div class="subpage-heading-copy">
            <h1>Reporting AI 分析配置</h1>
            <p>为当前 record 配置数据范围与分析附件，发起后将进入 AI 生成流程。</p>
          </div>
          ${pill("未发起")}
        </div>
        ${renderSummary([
          { label: "record_id", value: "CNHSBC006A-20260331" },
          { label: "rris_id", value: "RRIS-CN-G01-2026Q1" },
          { label: "report_name", value: state.lang === "en" ? "G01 Asset & Liability Notes" : "G01资产负债项目统计表附注", sans: true },
          { label: "market", value: "CN" }
        ])}
        ${
          state.demoState === "failed"
            ? `<div class="preview-fail-card">
                <span class="failure-icon">${icon("alert")}</span>
                <div class="preview-fail-copy"><strong>AI 分析生成失败</strong><p>${localized("逾期贷款映射失败：reserved_field24 存在非整数期数，无法确认信用卡逾期口径。请补充数据质量说明后重新发起。", "Overdue-loan mapping failed because reserved_field24 contains non-integer periods, so the credit-card overdue definition cannot be confirmed. Add a data-quality note and retry.")}</p></div>
                <button class="btn btn-danger" type="button" data-action="generate-report">${icon("refresh")}重新发起</button>
              </div>`
            : ""
        }
        <div class="config-layout">
          <div class="config-main-card">
            <div class="card-title-row"><h2>分析配置</h2><span class="card-title-meta">带 * 为必填项</span></div>
            <div class="form-body">
              <div class="form-block">
                <div class="field-label">数据范围 data_scope <span class="text-tertiary">（选填）</span></div>
                <select class="select" id="dataScope">
                  <option value="">请选择数据范围</option>
                  <option>${localized("境内汇总数据", "Domestic consolidated data")}</option>
                  <option>${localized("CNHSBC006A 单一机构", "Single entity CNHSBC006A")}</option>
                  <option>${localized("贷款质量五级分类数据域", "Five-category loan-quality data domain")}</option>
                </select>
                <div class="hint">${icon("info")}未指定，将使用 Workbook 全量数据</div>
              </div>
              <div class="form-block">
                <div class="form-block-title"><strong>表样模板与版本 <span class="required">*</span></strong><span>上传表样决定 Report detail 的 Web Excel 展示结构</span></div>
                <div class="template-asset-card">
                  <span class="template-file-mark">XLSX</span>
                  <div class="template-asset-copy">
                    <div class="template-asset-title"><strong>${templateVersions[0].fileName}</strong><span class="version-chip">${templateVersions[0].version} · 当前</span></div>
                    <p>${templateVersions[0].policy} · ${localized("逻辑版本", "Logic version")} <span class="mono">${templateVersions[0].logicVersion}</span></p>
                    <div class="template-asset-meta"><span>${templateVersions[0].sheets} 个工作表</span><span>${templateVersions[0].cells} 个单元格</span><span>制度批次 ${templateVersions[0].policyBatch}</span></div>
                  </div>
                  <div class="template-asset-actions">
                    <button class="btn btn-small" type="button" data-action="open-template-upload">${icon("upload")}上传新版本</button>
                    <button class="btn btn-small" type="button" data-action="open-template-versions">${icon("history")}版本记录</button>
                  </div>
                </div>
                <div class="hint">${icon("info")}制度升级后可上传新版表样；历史表样与逻辑版本永久保留，可在详情页查询和对比</div>
              </div>
              <div class="form-block">
                <div class="form-block-title"><strong>附件挂载 <span class="required">*</span></strong><span>支持 XLSX / CSV / PDF，单文件 ≤ 50 MB</span></div>
                <div class="attachment-actions">
                  <button class="btn btn-small" type="button" data-action="reference-puma">${icon("database")}引用 PUMA 历史报送数据</button>
                  <button class="btn btn-small" type="button" data-action="upload-preview">${icon("upload")}上传本地报送文件</button>
                </div>
                <div class="attachment-list">
                  <div class="attachment-item">
                    <span class="file-icon">${icon("file")}</span>
                    <div class="attachment-copy"><strong>20260331_G01_Submitted.xlsx</strong><span>${localized("真实报送值 · CNHSBC006A · 23,869 bytes", "Submitted values · CNHSBC006A · 23,869 bytes")}</span></div>
                    <button class="remove-icon" type="button" data-action="remove-attachment" aria-label="移除附件">${icon("close")}</button>
                  </div>
                  <div class="attachment-item">
                    <span class="file-icon file">${icon("file")}</span>
                    <div class="attachment-copy"><strong>StarRocks_loan_quality_report.sql</strong><span>${localized("本期 SQL 快照 · 已人工确认 · 2026-03-31", "Current-period SQL snapshot · Manually confirmed · 2026-03-31")}</span></div>
                    <button class="remove-icon" type="button" data-action="remove-attachment" aria-label="移除附件">${icon("close")}</button>
                  </div>
                </div>
                <div class="hint">${icon("info")}附件将用于补全业务口径；引用 PUMA 数据不会改变源数据</div>
              </div>
            </div>
          </div>
          ${candidateTables()}
        </div>
        <div class="config-footer">
          <span class="footer-note">发起生成后将锁定当前配置，生成结果可在 Reporting 详情中查看。</span>
          <div class="footer-actions">
            <button class="btn" type="button" data-action="go-reporting">返回清单</button>
            <button class="btn btn-primary" type="button" data-action="generate-report">${icon("validation")}发起生成</button>
          </div>
        </div>
      </section>`;
  }

  function renderReportingDetail() {
    const currentTemplate = templateVersions.find((item) => item.version === state.reportTemplateVersion) || templateVersions[0];
    const sheetData = renderExcelSheet();
    let rowNumber = 0;
    const sheetRows = sheetData.body.replace(/<tr([^>]*)>/g, (_, attributes) => {
      rowNumber += 1;
      return `<tr${attributes}><th class="excel-rowhead">${rowNumber}</th>`;
    });
    const columnLabels = Array.from({ length: sheetData.columns }, (_, index) => String.fromCharCode(65 + index));
    const sheets = [
      { id: "g01", label: state.lang === "en" ? "G01 Notes" : "G01 附表", tone: "red" },
      { id: "items", label: state.lang === "en" ? "Filing Items" : "填报项清单", tone: "green" },
      { id: "mapping", label: state.lang === "en" ? "StarRocks Mapping" : "StarRocks 映射", tone: "orange" },
      { id: "legend", label: state.lang === "en" ? "Legend" : "标记说明", tone: "blue" },
      { id: "sql", label: state.lang === "en" ? "SQL Snapshot" : "SQL 快照", tone: "purple" }
    ];
    return `
      <section class="page workbook-page">
        <div class="detail-hero">
          <div class="detail-hero-left">
            <button class="back-button" type="button" data-action="go-reporting" aria-label="返回清单">${icon("back")}</button>
            <div><h1>${state.lang === "en" ? "G01 Asset and Liability Statement – Notes" : "G01资产负债项目统计表附注"}</h1><p>CNHSBC006A-20260331 · RRIS-CN-G01-2026Q1 · CN</p></div>
          </div>
          <div class="detail-hero-actions">
            ${pill("已生成")}
            <button class="btn" type="button" data-action="show-approval-chain">${icon("workflow")}查看审批链路</button>
            <button class="btn btn-primary" type="button" data-action="open-task">${icon("check")}发起审批</button>
          </div>
        </div>
        <div class="stats-strip">
          <div class="stat-inline"><span class="stat-icon brand">${icon("grid")}</span><div><span>工作表 / 单元格</span><strong>5 / 53</strong></div></div>
          <div class="stat-inline"><span class="stat-icon green">${icon("check")}</span><div><span>已映射内容</span><strong>11 / 11</strong></div></div>
          <div class="stat-inline"><span class="stat-icon">${icon("alert")}</span><div><span>待复核单元格</span><strong>0</strong></div></div>
          <span class="spacer"></span><span class="stats-meta">表样 ${currentTemplate.version} · 逻辑 ${currentTemplate.logicVersion} · 生成于 2026-04-01 09:24</span>
        </div>
        ${
          currentTemplate.version !== templateVersions[0].version
            ? `<div class="alert-banner warning workbook-history-banner"><span class="alert-icon">${icon("history")}</span><div class="alert-copy"><strong>正在查看历史表样 ${currentTemplate.version}</strong><p>当前展示逻辑版本 ${currentTemplate.logicVersion}，仅用于查询与对比。最新版本为 ${templateVersions[0].version}。</p></div><button class="btn btn-small" type="button" data-action="use-latest-template">返回最新版本</button></div>`
            : ""
        }
        <div class="webexcel-shell" id="webexcelShell">
          <div class="excel-docbar">
            <div class="excel-doc-identity">
              <span class="excel-file-mark">XLSX</span>
              <div><strong>${currentTemplate.fileName}</strong><span>${currentTemplate.sheets} sheets · ${currentTemplate.cells} cells · ${currentTemplate.policy}</span></div>
            </div>
            <div class="excel-doc-actions">
              <span class="excel-auto-badge"><i></i>AI 已映射</span>
              <select class="excel-version-select" id="templateVersionSelect" aria-label="表样版本">
                ${templateVersions.map((version) => `<option value="${version.version}" ${version.version === currentTemplate.version ? "selected" : ""}>${version.version} · ${version.logicVersion}${version.status === "current" ? " · 当前" : ""}</option>`).join("")}
              </select>
              <button class="btn btn-small" type="button" data-action="open-template-versions">${icon("history")}版本与逻辑</button>
              <button class="icon-button excel-doc-icon" type="button" data-action="download-template" data-tooltip="下载表样">${icon("download")}</button>
            </div>
          </div>
          <div class="excel-commandbar">
            <div class="excel-command-group">
              <button type="button" disabled>${icon("refresh")}</button>
              <button type="button" disabled>${icon("copy")}</button>
              <button type="button" disabled>${icon("filter")}</button>
            </div>
            <span class="excel-command-separator"></span>
            <span class="excel-command-hint">${icon("info")}右键单元格查看 BRD / FSD 明细；双击同样可打开</span>
            <span class="excel-readonly-label">${icon("lock")}AI 生成结果 · 只读</span>
          </div>
          <div class="excel-formula-bar">
            <span class="excel-name-box" id="excelNameBox">A1</span>
            <span class="excel-fx">fx</span>
            <div class="excel-formula-value" id="excelFormulaValue">${sheetData.title}</div>
            <span class="excel-cell-state" id="excelCellState">单元格已选择</span>
          </div>
          <div class="excel-grid-scroll">
            <table class="excel-grid" id="excelGrid" aria-label="Web Excel 报表表样" style="min-width:${Math.max(1180, sheetData.columns * 128)}px">
              <thead><tr><th class="excel-corner"></th>${columnLabels.map((column) => `<th>${column}</th>`).join("")}</tr></thead>
              <tbody>${sheetRows}</tbody>
            </table>
          </div>
          <div class="excel-sheetbar">
            <div class="excel-sheet-tabs">
              ${sheets.map((sheet) => `<button class="excel-sheet-tab ${state.reportSheet === sheet.id ? "active" : ""}" type="button" data-action="switch-excel-sheet" data-sheet="${sheet.id}"><i class="${sheet.tone}"></i>${sheet.label}</button>`).join("")}
              <button class="excel-add-sheet" type="button" data-tooltip="当前模板不可新增工作表" disabled>${icon("plus")}</button>
            </div>
            <div class="excel-sheetbar-status"><span>就绪</span><span>选择：<b id="excelSelectionSummary">A1</b></span><span>100%</span></div>
          </div>
        </div>
        <div class="excel-help-row">
          <span>${icon("command")}Web Excel 预览由上传表样驱动，行列、合并单元格和公式位置与源文件保持一致。</span>
          <span class="mono">TEMPLATE ${currentTemplate.version} · LOGIC ${currentTemplate.logicVersion}</span>
        </div>
      </section>`;
  }

  function openCellModal(cellId, description, readonly = false) {
    const docs = excelCellDocs[cellId] || {
      desc: description || "业务字段口径",
      descEn: description || "Business field definition",
      brd: "",
      brdEn: "",
      fsd: "",
      fsdEn: "",
      sql: "",
      pseudo: ""
    };
    const localizedDesc = state.lang === "en" ? docs.descEn || docs.desc : docs.desc;
    const localizedBrd = state.lang === "en" ? docs.brdEn || docs.brd : docs.brd;
    const localizedFsd = state.lang === "en" ? docs.fsdEn || docs.fsd : docs.fsd;
    const missingBrd = !localizedBrd;
    const missingFsd = !localizedFsd;
    const comment = readonly
      ? `<div class="readonly-notice">${icon("lock")}审批已完成，评论仅可查看，不可新增。</div>`
      : `<div class="comment-compose">
          <textarea class="textarea" id="cellComment" placeholder="补充数据口径说明，或 @ 同事参与确认"></textarea>
          <div class="comment-compose-footer"><span>Enter 换行 · 评论将同步至审批链路</span><button class="btn btn-primary btn-small" type="button" data-action="submit-cell-comment">${icon("send")}发表评论</button></div>
        </div>`;
    openOverlay(`
      <div class="modal modal-lg" role="dialog" aria-modal="true" aria-labelledby="cellModalTitle">
        <div class="modal-header">
          <div class="modal-title"><div class="cell-modal-kicker"><span>WEB EXCEL CELL</span><b>${escapeHTML(state.reportTemplateVersion)}</b></div><h2 id="cellModalTitle">单元格 ${escapeHTML(cellId)}</h2><p>${escapeHTML(localizedDesc)} · 生成内容与业务口径</p></div>
          <button class="modal-close" type="button" data-action="close-overlay" aria-label="关闭">${icon("close")}</button>
        </div>
        <div class="modal-body flush">
          <div class="detail-section">
            <div class="section-title-bar"><strong>BRD 内容详情</strong><button class="copy-icon" type="button" data-action="copy" data-copy="${escapeHTML(localizedBrd)}" data-tooltip="复制 BRD">${icon("copy")}</button></div>
            ${
              missingBrd
                ? '<div class="content-panel missing">本单元格未产出 BRD 内容</div>'
                : `<div class="content-panel"><p>${escapeHTML(localizedBrd)}</p></div>`
            }
          </div>
          <div class="detail-section">
            <div class="section-title-bar"><strong>FSD 内容详情</strong><button class="copy-icon" type="button" data-action="copy" data-copy="${escapeHTML(localizedFsd)}" data-tooltip="复制 FSD">${icon("copy")}</button></div>
            ${
              missingFsd
                ? '<div class="content-panel missing">本单元格未产出 FSD 内容</div>'
                : `<div class="content-panel"><p>${escapeHTML(localizedFsd)}</p></div>`
            }
          </div>
          <div class="detail-section">
            <div class="section-title-bar"><strong>SQL 脚本</strong><button class="copy-icon" type="button" data-action="copy" data-copy="${escapeHTML(docs.sql)}" data-tooltip="复制 SQL">${icon("copy")}</button></div>
            ${docs.sql ? `<pre class="code-panel">${escapeHTML(docs.sql)}</pre>` : '<div class="content-panel missing">本单元格未产出 SQL 内容</div>'}
          </div>
          <div class="detail-section">
            <div class="section-title-bar"><strong>伪代码</strong><button class="copy-icon" type="button" data-action="copy" data-copy="${escapeHTML(docs.pseudo)}" data-tooltip="复制伪代码">${icon("copy")}</button></div>
            ${docs.pseudo ? `<pre class="code-panel">${escapeHTML(docs.pseudo)}</pre>` : '<div class="content-panel missing">本单元格未产出伪代码</div>'}
          </div>
          <div class="detail-section">
            <div class="comment-head"><strong>评论</strong><span>2 条讨论</span></div>
            <div class="comment-list">
              <div class="comment-item"><span class="comment-avatar">CY</span><div class="comment-copy"><div class="comment-meta"><strong>陈思远</strong><span>2026-04-01 10:24</span></div><p>${state.lang === "en" ? "Please confirm that credit-card overdue amounts use reserved_field24 periods, with >2 at 60+ days and >3 at 90+ days." : "请确认信用卡逾期金额使用 reserved_field24 期数，60 天以上使用 >2，90 天以上使用 >3。"}</p></div></div>
              <div class="comment-item"><span class="comment-avatar">LY</span><div class="comment-copy"><div class="comment-meta"><strong>林妍</strong><span>2026-04-01 10:31</span></div><p>${state.lang === "en" ? "Confirmed against the 2026-03-31 submitted values. All 11 filing items are mapped and verified." : "已与 2026-03-31 报送值核对，11 个填报项均已完成映射并复核一致。"}</p></div></div>
            </div>
            ${comment}
          </div>
        </div>
      </div>`);
  }

  function openTemplateVersions() {
    const en = state.lang === "en";
    const localized = (zh, english) => (en ? english : zh);
    openOverlay(`
      <aside class="drawer drawer-wide" role="dialog" aria-modal="true" aria-labelledby="templateVersionsTitle">
        <div class="drawer-header">
          <div><div class="cell-modal-kicker"><span>TEMPLATE GOVERNANCE</span><b>${templateVersions.length} VERSIONS</b></div><h2 id="templateVersionsTitle">${localized("表样模板版本与逻辑记录", "Template versions and logic records")}</h2><p>20260331_withAI.xlsx · ${localized("按制度生效日期倒序", "Ordered by policy effective date")}</p></div>
          <button class="modal-close" type="button" data-action="close-overlay">${icon("close")}</button>
        </div>
        <div class="drawer-body">
          <div class="template-version-summary">
            <div><span>当前表样</span><strong>${templateVersions[0].version}</strong></div>
            <div><span>当前逻辑版本</span><strong class="mono">${templateVersions[0].logicVersion}</strong></div>
            <div><span>最近生效</span><strong>${templateVersions[0].effectiveDate}</strong></div>
          </div>
          <div class="drawer-section">
            <div class="search-field template-version-search">${icon("search")}<input class="input" id="templateVersionSearch" type="search" placeholder="搜索版本号 / 逻辑版本 / 制度批次"></div>
          </div>
          <div class="drawer-section">
            <div class="drawer-section-title"><span>版本记录</span><button class="btn btn-small" type="button" data-action="open-template-upload">${icon("upload")}上传新版本</button></div>
            <div class="template-version-list" id="templateVersionList">
              ${templateVersions
                .map(
                  (version) => `
                  <article class="template-version-item ${version.status === "current" ? "current" : ""}" data-version-record="${escapeHTML(`${version.version} ${version.logicVersion} ${version.policyBatch} ${version.policy}`)}">
                    <div class="template-version-marker">${version.status === "current" ? icon("check") : icon("history")}</div>
                    <div class="template-version-main">
                      <div class="template-version-head"><strong>${version.version}</strong>${version.status === "current" ? '<span class="pill pill-green">当前生效</span>' : '<span class="pill pill-neutral">历史版本</span>'}<span class="version-logic">逻辑 <b class="mono">${version.logicVersion}</b></span></div>
                      <p>${escapeHTML(version.policy)}</p>
                      <div class="template-version-meta"><span>${escapeHTML(version.fileName)}</span><span>生效 ${version.effectiveDate}</span><span>${version.uploader} · ${version.uploadedAt}</span></div>
                      <div class="template-version-actions">
                        <button class="row-link" type="button" data-action="preview-template-version" data-version="${version.version}">${icon("eye")}查看表样</button>
                        <button class="row-link" type="button" data-action="compare-template-version" data-version="${version.version}">${icon("workflow")}逻辑差异 ${version.changeCount}</button>
                        <button class="row-link" type="button" data-action="download-template-version" data-version="${version.version}">${icon("download")}下载</button>
                      </div>
                    </div>
                  </article>`
                )
                .join("")}
            </div>
          </div>
          <div class="drawer-section">
            <div class="drawer-section-title"><span>${localized("当前逻辑版本变更", "Current logic changes")}</span><span class="text-tertiary">G01-LOGIC-198 → 201</span></div>
            <div class="logic-diff-card">
              <div><span>${localized("新增", "Added")}</span><p>${localized("信用卡逾期使用 reserved_field24 期数口径，60 天以上和 90 天以上分别使用 >2、>3。", "Credit-card overdue tests now use the reserved_field24 period count, with >2 for 60+ days and >3 for 90+ days.")}</p></div>
              <div><span>${localized("修改", "Changed")}</span><p>${localized("指定业务类型的非信用卡逾期本金优先取 prin_od_amt_cny，其余场景取 loan_bal_cny。", "For specified non-card business types, overdue principal now uses prin_od_amt_cny; other cases use loan_bal_cny.")}</p></div>
              <div><span>${localized("映射", "Mapping")}</span><p>${localized("五级分类固定域补全；仅在事实、分类、唯一键和境内机构核验通过后输出显式 0。", "The fixed five-grade domain is completed. An explicit zero is returned only after fact, classification, uniqueness, and domestic-org checks pass.")}</p></div>
            </div>
          </div>
        </div>
        <div class="drawer-footer"><button class="btn" type="button" data-action="close-overlay">关闭</button></div>
      </aside>`);
    document.getElementById("templateVersionSearch")?.addEventListener("input", (event) => {
      const query = event.target.value.trim().toLowerCase();
      overlayHost.querySelectorAll("[data-version-record]").forEach((item) => {
        item.style.display = item.dataset.versionRecord.toLowerCase().includes(query) ? "" : "none";
      });
    });
  }

  function openTemplateUploadModal() {
    const en = state.lang === "en";
    const localized = (zh, english) => (en ? english : zh);
    openOverlay(`
      <div class="modal modal-lg" role="dialog" aria-modal="true" aria-labelledby="templateUploadTitle">
        <div class="modal-header">
          <div class="modal-title"><div class="cell-modal-kicker"><span>VERSIONED TEMPLATE</span><b>NEW VERSION</b></div><h2 id="templateUploadTitle">${localized("上传新版表样模板", "Upload a new template")}</h2><p>${localized("制度升级后可并行保留旧版表样、源文件与映射逻辑", "After a policy update, historical templates, source files, and mapping logic are retained")}</p></div>
          <button class="modal-close" type="button" data-action="close-overlay">${icon("close")}</button>
        </div>
        <div class="modal-body">
          <div class="upload-dropzone template-upload-zone" data-action="pick-template-file">
            <span>${icon("upload-cloud")}</span>
            <strong>${localized("拖拽新版 XLSX 表样到此处，或点击选择", "Drag a new XLSX template here or click to select")}</strong>
            <span>${localized("系统将自动识别工作表、合并单元格、公式与命名区域", "The system will detect worksheets, merged cells, formulas, and named ranges")}</span>
          </div>
          <div class="form-grid" style="margin-top:17px">
            <div class="field-group"><label class="field-label">新版本号 <span class="required">*</span></label><input class="input mono" id="newTemplateVersion" value="v2026.06.30"></div>
            <div class="field-group"><label class="field-label">制度生效日期 <span class="required">*</span></label><input class="input" type="date" value="2026-06-30"></div>
            <div class="field-group"><label class="field-label">制度批次</label><input class="input mono" value="PBOC-G01-2026Q2"></div>
            <div class="field-group"><label class="field-label">逻辑版本</label><input class="input mono" value="G01-LOGIC-204"></div>
            <div class="field-group span-2"><label class="field-label">变更说明</label><textarea class="textarea" style="min-height:70px">${localized("依据 G01 2026 年第二季度制度口径，更新贷款质量分类与逾期贷款映射说明。", "Update loan-quality classification and overdue-loan mappings for the G01 Q2 2026 policy basis.")}</textarea></div>
            <div class="field-group span-2"><div class="inline-toggle"><span>${localized("上传后设为当前生效版本，并重新发起 AI 映射", "Make this the current version and run AI mapping again")}</span><button class="switch on" type="button" data-action="toggle-switch"></button></div></div>
          </div>
          <div class="hint" style="margin-top:12px">${icon("info")}${localized("旧版本不会被覆盖；已提交审批的报表继续引用原版本快照", "Historical versions are never overwritten; approved reports continue to use their original version snapshots.")}</div>
        </div>
        <div class="modal-footer">
          <button class="btn" type="button" data-action="close-overlay">取消</button>
          <button class="btn btn-primary" type="button" data-action="confirm-template-upload">${icon("upload")}上传并创建版本</button>
        </div>
      </div>`);
  }

  function excelColumn(index) {
    let value = "";
    let number = index;
    while (number > 0) {
      number -= 1;
      value = String.fromCharCode(65 + (number % 26)) + value;
      number = Math.floor(number / 26);
    }
    return value;
  }

  function excelCellAddress(cell) {
    if (/^[A-Z]+\d+$/.test(cell.dataset.excelCell || "")) return cell.dataset.excelCell;
    const row = cell.closest("tr");
    return `${excelColumn(cell.cellIndex)}${row.rowIndex}`;
  }

  function selectExcelCell(cell) {
    const grid = document.getElementById("excelGrid");
    if (!grid) return;
    grid.querySelectorAll(".excel-cell.selected").forEach((item) => item.classList.remove("selected"));
    cell.classList.add("selected");
    const address = excelCellAddress(cell);
    const nameBox = document.getElementById("excelNameBox");
    const formula = document.getElementById("excelFormulaValue");
    const stateLabel = document.getElementById("excelCellState");
    const summary = document.getElementById("excelSelectionSummary");
    const doc = excelCellDocs[cell.dataset.excelCell];
    if (nameBox) nameBox.textContent = address;
    if (formula) formula.textContent = cell.dataset.formula || cell.dataset.value || "";
    if (summary) summary.textContent = `${address} · ${cell.dataset.excelCell}`;
    if (stateLabel) {
      stateLabel.textContent = doc?.brd && doc?.fsd ? "BRD ✓  FSD ✓" : "BRD / FSD 待补充";
      stateLabel.classList.toggle("warning", !(doc?.brd && doc?.fsd));
    }
  }

  function openExcelContextMenu(event, cell) {
    document.getElementById("excelContextMenu")?.remove();
    selectExcelCell(cell);
    const doc = excelCellDocs[cell.dataset.excelCell];
    const description = state.lang === "en" ? doc?.descEn || doc?.desc : doc?.desc;
    const menu = document.createElement("div");
    menu.id = "excelContextMenu";
    menu.className = "excel-context-menu";
    menu.innerHTML = `
      <div class="excel-context-head"><span>${escapeHTML(description || "Mapped cell")}</span><b>${cell.dataset.excelCell}</b></div>
      <button type="button" data-action="excel-open-cell" data-cell="${cell.dataset.excelCell}" data-desc="${escapeHTML(description || "")}">${icon("grid")}<span>查看 BRD / FSD</span><kbd>↵</kbd></button>
      <button type="button" data-action="excel-open-cell" data-cell="${cell.dataset.excelCell}" data-desc="${escapeHTML(description || "")}">${icon("code")}<span>查看 SQL / 伪代码</span></button>
      <div class="excel-context-separator"></div>
      <button type="button" data-action="excel-copy-value" data-copy="${escapeHTML(cell.dataset.value || "")}">${icon("copy")}<span>复制单元格值</span></button>
      <button type="button" data-action="open-template-versions">${icon("history")}<span>查看当前逻辑版本</span></button>`;
    menu.style.left = `${Math.min(event.clientX, window.innerWidth - 255)}px`;
    menu.style.top = `${Math.min(event.clientY, window.innerHeight - 245)}px`;
    document.body.appendChild(menu);
    applyTranslations(menu);
  }

  function validationActions(row) {
    const generated = ["已生成", "已生成(待确认)", "已生成（待确认）", "审批中", "已通过"].includes(row.ai_gen_status);
    const generating = row.ai_gen_status === "生成中";
    const missingFreq = !row.report_freq;
    let startButton;
    if (generating) {
      startButton = disabledAction("生成中", "该 RRIS 正在生成规则，请稍候", "has-spinner");
    } else if (generated) {
      startButton = disabledAction("发起 Validation", "该 RRIS 已完成生成");
    } else if (missingFreq) {
      startButton = disabledAction("发起 Validation", "报送频度缺失，请先在 PUMA 补齐");
    } else {
      startButton = `<button class="row-link" type="button" data-action="open-validation-config" data-rris="${row.rris_id}">${icon("play")}发起 Validation</button>`;
    }
    return `
      <div class="row-actions aligned row-actions--validation">
        ${startButton}
        ${
          generated
            ? `<button class="row-link" type="button" data-action="open-validation-detail" data-rris="${row.rris_id}">${icon("eye")}进入详情</button>`
            : disabledAction("进入详情", generating ? "生成完成后可进入详情" : "该 RRIS 尚未生成 Validation 规则")
        }
      </div>`;
  }

  function filteredValidationRows() {
    const query = (document.getElementById("validationSearch")?.value || "").trim().toLowerCase();
    const marketValue = document.getElementById("validationMarketFilter")?.value || "";
    const freqValue = document.getElementById("validationFreqFilter")?.value || "";
    const statusValue = document.getElementById("validationStatusFilter")?.value || "";
    return state.validationRows.filter((row) => {
      const matchesQuery = !query || `${row.rris_id} ${row.report_name}`.toLowerCase().includes(query);
      return matchesQuery && (!marketValue || row.market === marketValue) && (!freqValue || row.report_freq === freqValue) && (!statusValue || row.ai_gen_status === statusValue);
    });
  }

  function validationTableBody() {
    const rows = filteredValidationRows();
    if (!rows.length) return `<tr><td colspan="7">${renderEmpty("未找到匹配的 Validation 表单", "调整筛选条件，或重新从 PUMA 拉取 RRIS 表单。", "重新拉取", "sync-validation")}</td></tr>`;
    return rows
      .map(
        (row) => `
        <tr>
          <td><span class="id-cell">${row.rris_id}<button class="copy-icon" type="button" data-action="copy" data-copy="${row.rris_id}" data-tooltip="复制 rris_id">${icon("copy")}</button></span></td>
          <td><div class="report-cell"><strong>${row.report_name}</strong><span>监管报送规则</span></div></td>
          <td>${row.report_freq ? `<span class="mono">${row.report_freq}</span>` : `<span class="missing-value">${icon("alert")}频度缺失</span>`}</td>
          <td>${market(row.market)}</td>
          <td><span class="mono text-secondary">${row.last_sync_puma_time}</span></td>
          <td>${pill(row.ai_gen_status)}</td>
          <td class="action-cell">${validationActions(row)}</td>
        </tr>`
      )
      .join("");
  }

  function renderValidationList() {
    const isFailed = state.demoState === "failed";
    const isEmpty = state.demoState === "empty";
    return `
      <section class="page">
        ${renderPageHeader(
          "Validation 校验规则",
          "以 RRIS 为单位生成监管校验规则，支持人工复核、调整与审批。",
          `<span class="sync-meta">${icon("clock")}最近同步 2026-11-19 09:43:02</span>
           <button class="btn" type="button" data-action="sync-validation">${icon("refresh")}重新拉取</button>`
        )}
        ${
          isFailed
            ? `<div class="alert-banner">
                <span class="alert-icon">${icon("alert")}</span>
                <div class="alert-copy"><strong>RRIS 表单拉取失败</strong><p>PUMA 返回结构校验异常（ERR_RESPONSE_SCHEMA）。已保留上次成功同步结果，请稍后重试。</p></div>
                <div class="alert-actions"><button class="btn btn-small" type="button" data-action="sync-validation">${icon("refresh")}重新拉取</button></div>
              </div>`
            : ""
        }
        <div class="filter-card">
          <div class="search-field">${icon("search")}<input class="input" id="validationSearch" type="search" placeholder="搜索 rris_id / report_name" autocomplete="off"></div>
          <select class="select" id="validationMarketFilter" aria-label="Market"><option value="">全部 Market</option><option>CN</option><option>HK</option><option>SG</option><option>JP</option></select>
          <select class="select" id="validationFreqFilter" aria-label="报送频度"><option value="">全部报送频度</option><option>Daily</option><option>Weekly</option><option>Monthly</option><option>Quarterly</option></select>
          <select class="select wide" id="validationStatusFilter" aria-label="AI 生成状态"><option value="">全部生成状态</option><option>未生成</option><option>生成中</option><option>已生成</option><option>审批中</option><option>已通过</option></select>
          <span class="filter-result">显示 ${isEmpty ? 0 : state.validationRows.length} 条 RRIS</span>
        </div>
        <div class="data-card">
          ${
            isEmpty
              ? renderEmpty("暂无 Validation 表单", "当前 Market 暂无 RRIS 表单，请从 PUMA 重新拉取。", "重新拉取", "sync-validation")
              : isFailed
                ? `<div class="failure-table-state">
                    <span class="failure-icon">${icon("alert")}</span>
                    <h3>无法获取 RRIS 表单</h3>
                    <p>拉取过程中 PUMA 返回结构校验异常，本次不展示空列表，以避免误判数据为空。错误原因：ERR_RESPONSE_SCHEMA。</p>
                    <button class="btn btn-primary" type="button" data-action="sync-validation">${icon("refresh")}重新拉取</button>
                  </div>`
                : `<div class="table-wrap">
                    <table class="data-table" aria-label="Validation 表单列表">
                      <thead><tr><th>rris_id</th><th>report_name</th><th>report_freq</th><th>market</th><th>last_sync_puma_time</th><th>ai_gen_status</th><th class="action-cell">操作</th></tr></thead>
                      <tbody>${validationTableBody()}</tbody>
                    </table>
                  </div>
                  <div class="table-footer">
                    <span class="table-total">共 <strong>${state.validationRows.length}</strong> 条记录</span>
                    <div class="pagination"><button disabled>${icon("back")}</button><button class="active">1</button><button disabled>${icon("chevron-right")}</button><span class="page-size">每页 <select><option>20</option><option>50</option></select> 条</span></div>
                  </div>`
          }
        </div>
      </section>`;
  }

  function renderValidationConfig() {
    return `
      <section class="page narrow">
        <div class="subpage-heading">
          <button class="back-button" type="button" data-action="go-validation" aria-label="返回 Validation 列表">${icon("back")}</button>
          <div class="subpage-heading-copy"><h1>Validation 规则配置</h1><p>上传监管发文与线下计算逻辑，配置本次规则生成范围。</p></div>
          ${pill("未生成")}
        </div>
        ${renderSummary([
          { label: "rris_id", value: "RRIS-SG-09731" },
          { label: "report_name", value: "MAS 651 大额风险敞口", sans: true },
          { label: "report_freq", value: "Monthly" },
          { label: "market", value: "SG" }
        ])}
        ${
          state.demoState === "failed"
            ? `<div class="preview-fail-card">
                <span class="failure-icon">${icon("alert")}</span>
                <div class="preview-fail-copy"><strong>Validation 规则生成失败</strong><p>监管发文解析超时：REG_DOC 第 4 页表格结构无法识别，请检查文件完整性后重新发起。</p></div>
                <button class="btn btn-danger" type="button" data-action="generate-validation">${icon("refresh")}重新发起</button>
              </div>`
            : ""
        }
        <div class="config-layout">
          <div class="config-main-card">
            <div class="card-title-row"><h2>规则生成配置</h2><span class="card-title-meta">生成后可在详情页人工调整</span></div>
            <div class="form-body">
              <div class="form-block">
                <div class="field-label">报表范围 target_report_scope <span class="text-tertiary">（选填）</span></div>
                <input class="input" id="targetScope" type="text" placeholder="如：MAS 651 表 A/B/C，留空则使用全量">
                <div class="hint">${icon("info")}未指定，将使用 Workbook 全量数据</div>
              </div>
              <div class="form-block">
                <div class="form-block-title"><strong>规则依据附件</strong><span>REG_DOC 推荐上传最新版本</span></div>
                <div class="attachment-actions">
                  <button class="btn btn-small" type="button" data-action="upload-reg-doc">${icon("upload")}上传监管发文（REG_DOC）</button>
                  <button class="btn btn-small" type="button" data-action="upload-logic">${icon("upload")}上传线下计算逻辑</button>
                </div>
                <div class="alert-banner warning" style="margin-top:10px;margin-bottom:0">
                  <span class="alert-icon">${icon("alert")}</span>
                  <div class="alert-copy"><strong>缺少监管发文</strong><p>规则口径可能不完整。建议至少上传一份 REG_DOC 后再发起生成。</p></div>
                </div>
                <div class="attachment-list">
                  <div class="attachment-item">
                    <span class="file-icon folder">${icon("folder")}</span>
                    <div class="attachment-copy"><strong>MAS651_Line_Calculation_Logic.xlsx</strong><span>线下上传 · 2026-11-18 17:02 · 680 KB</span></div>
                    <button class="remove-icon" type="button" data-action="remove-attachment" aria-label="移除附件">${icon("close")}</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          ${candidateTables()}
        </div>
        <div class="config-footer">
          <span class="footer-note">未上传 REG_DOC 仍可生成，但规则口径完整度可能下降。</span>
          <div class="footer-actions">
            <button class="btn" type="button" data-action="go-validation">返回</button>
            <button class="btn btn-primary" type="button" data-action="generate-validation">${icon("validation")}发起生成</button>
          </div>
        </div>
      </section>`;
  }

  const validationRules = [
    {
      seq: "R-001",
      content: "大额风险敞口单一交易对手不得超过一级资本净额的 25%。",
      logic: "检查 exposure_amount / tier1_capital 是否小于等于 0.25；超出则标记违规。",
      expr: "exposure_ratio <= 0.25",
      freq: "Monthly",
      status: "已生成",
      comments: 2
    },
    {
      seq: "R-002",
      content: "交易对手敞口需与集团客户关系树映射一致。",
      logic: "按 counterparty_id 关联 HUB 客户关系树，校验最终集团 parent_id 是否存在。",
      expr: "counterparty_group_id IS NOT NULL",
      freq: "Monthly",
      status: "已人工调整",
      comments: 1
    },
    {
      seq: "R-003",
      content: "报送金额字段不得为空，且币种必须为 SGD。",
      logic: "检查 exposure_amount_hkd 非空，currency_code 等于 SGD 或完成换算来源标记。",
      expr: "exposure_amount_hkd IS NOT NULL",
      freq: "Monthly",
      status: "已生成",
      comments: 0
    },
    {
      seq: "R-004",
      content: "关注类与不良类敞口需分别汇总，并与风险分类台账核对。",
      logic: "按 risk_class 汇总 exposure_amount_hkd，与 HUB 台账差额不超过 0.01%。",
      expr: "ABS(diff_ratio) <= 0.0001",
      freq: "Quarterly",
      status: "已人工调整",
      comments: 3
    }
  ];

  function renderRulesBody() {
    return validationRules
      .map(
        (rule) => `
        <tr data-rule-row="${rule.seq}">
          <td class="mono strong">${rule.seq}</td>
          <td class="rule-content-col"><textarea class="rule-edit" data-rule="${rule.seq}" data-field="content" ${state.submitted ? "disabled" : ""}>${escapeHTML(rule.content)}</textarea></td>
          <td class="rule-logic-col"><textarea class="rule-edit" data-rule="${rule.seq}" data-field="logic" ${state.submitted ? "disabled" : ""}>${escapeHTML(rule.logic)}</textarea></td>
          <td class="rule-expr-col"><textarea class="rule-edit mono" data-rule="${rule.seq}" data-field="expr" ${state.submitted ? "disabled" : ""}>${escapeHTML(rule.expr)}</textarea></td>
          <td><select class="select freq-select" data-rule="${rule.seq}" data-field="freq" ${state.submitted ? "disabled" : ""}><option ${rule.freq === "Daily" ? "selected" : ""}>Daily</option><option ${rule.freq === "Weekly" ? "selected" : ""}>Weekly</option><option ${rule.freq === "Monthly" ? "selected" : ""}>Monthly</option><option ${rule.freq === "Quarterly" ? "selected" : ""}>Quarterly</option></select></td>
          <td>${pill(rule.status, rule.status === "已人工调整" ? "pill-purple" : "")}</td>
          <td><button class="comment-count" type="button" data-action="open-rule" data-rule="${rule.seq}">${icon("comment")}${rule.comments}</button></td>
          <td class="action-cell">
            <div class="row-actions aligned row-actions--rules">
              <button class="row-link" type="button" data-action="open-rule" data-rule="${rule.seq}">${icon("chevron-right")}展开详情</button>
              ${
                state.submitted
                  ? disabledAction("编辑", "审批已提交，当前规则为只读快照")
                  : `<button class="row-link" type="button" data-action="edit-rule" data-rule="${rule.seq}">${icon("edit")}编辑</button>`
              }
            </div>
          </td>
        </tr>`
      )
      .join("");
  }

  function renderValidationDetail() {
    const isEmpty = state.demoState === "empty";
    const adjustedCount = validationRules.filter((rule) => rule.status === "已人工调整").length;
    return `
      <section class="page">
        <div class="detail-hero">
          <div class="detail-hero-left">
            <button class="back-button" type="button" data-action="go-validation" aria-label="返回列表">${icon("back")}</button>
            <div><h1>MAS 651 大额风险敞口</h1><p>RRIS-SG-09731 · SG · Monthly</p></div>
          </div>
          <div class="detail-hero-actions">
            ${pill(state.submitted ? "审批中" : "已生成(待确认)")}
            <button class="btn" type="button" data-action="done-rules">${icon("workflow")}查看审批链路</button>
            <button class="btn" type="button" data-action="go-validation">${icon("back")}返回列表</button>
          </div>
        </div>
        <div class="stats-strip">
          <div class="stat-inline"><span class="stat-icon brand">${icon("validation")}</span><div><span>规则总数</span><strong>${isEmpty ? 0 : validationRules.length}</strong></div></div>
          <div class="stat-inline"><span class="stat-icon green">${icon("edit")}</span><div><span>已人工调整</span><strong>${isEmpty ? 0 : adjustedCount}</strong></div></div>
          <div class="stat-inline"><span class="stat-icon">${icon("comment")}</span><div><span>待处理评论</span><strong>${isEmpty ? 0 : 6}</strong></div></div>
          <span class="spacer"></span><span class="stats-meta">版本 v2 · 生成于 2026-11-19 11:18 · ${state.submitted ? "审批快照已锁定" : "可编辑"}</span>
        </div>
        <div class="data-card">
          <div class="card-title-row"><div><h2>校验规则清单</h2><span class="card-title-meta">行内修改后自动标记为“已人工调整”，并记录前后值</span></div>${state.submitted ? `<span class="pill pill-orange">审批中</span>` : `<span class="pill pill-green">待确认</span>`}</div>
          ${
            isEmpty
              ? renderEmpty("本次未生成规则", "请检查输入文件、Workbook 候选表与报表范围后重试。", "联系开发", "contact-admin")
              : `<div class="table-wrap">
                  <table class="data-table rules-table" aria-label="校验规则详情">
                    <thead><tr><th>rule_seq</th><th>rule_content</th><th>rule_logic</th><th>rule_expr</th><th>rule_freq</th><th>rule_status</th><th>rule_comment_list</th><th class="action-cell">操作</th></tr></thead>
                    <tbody>${renderRulesBody()}</tbody>
                  </table>
                </div>
                <div class="table-footer">
                  <span class="table-total">共 <strong>${validationRules.length}</strong> 条规则 · 点击行可展开全字段与修改历史</span>
                  <div class="row-actions">
                    ${state.submitted ? disabledAction("提交审批", "该任务已进入审批流程") : `<button class="btn btn-primary" type="button" data-action="submit-approval">${icon("check")}提交审批</button>`}
                  </div>
                </div>`
          }
        </div>
      </section>`;
  }

  function renderUploadRecords() {
    return `
      <div class="table-wrap">
        <table class="data-table upload-table" aria-label="上传记录">
          <thead><tr><th>文件名 / 文件 ID</th><th>大小</th><th>上传人</th><th>上传时间</th><th>来源类型</th><th>入库结果</th><th class="action-cell">操作</th></tr></thead>
          <tbody>
            ${state.uploadedFiles
              .map(
                (file) => `
                <tr>
                  <td><div class="file-name-cell"><span class="file-icon ${file.name.endsWith(".csv") ? "file" : ""}">${icon("file")}</span><div class="file-name-copy"><strong>${escapeHTML(file.name)}</strong><span>${file.id}</span></div></div></td>
                  <td class="mono">${file.size}</td>
                  <td>${escapeHTML(file.uploader)}</td>
                  <td class="mono text-secondary">${file.time}</td>
                  <td><span class="source-chip ${file.source === "定时捞取" ? "schedule" : ""}">${icon(file.source === "定时捞取" ? "history" : "upload")}${file.source}</span></td>
                  <td><span class="pill ${file.result === "成功" ? "pill-green" : "pill-red"}">${file.result}</span><span class="result-reason">${escapeHTML(file.reason)}</span></td>
                  <td class="action-cell"><div class="row-actions aligned row-actions--files"><button class="row-link" type="button" data-action="preview-file">${icon("eye")}预览</button><button class="row-link" type="button" data-action="download-file">${icon("download")}下载</button><button class="row-link" type="button" data-action="reference-file">${icon("link")}引用</button></div></td>
                </tr>`
              )
              .join("")}
          </tbody>
        </table>
      </div>
      <div class="table-footer"><span class="table-total">共 <strong>${state.uploadedFiles.length}</strong> 条上传记录</span><div class="pagination"><button disabled>${icon("back")}</button><button class="active">1</button><button disabled>${icon("chevron-right")}</button><span class="page-size">每页 <select><option>20</option></select> 条</span></div></div>`;
  }

  function renderScheduleTasks() {
    const tasks = [
      {
        name: "HK 总账日终数据",
        path: "/finance/hk/gl/daily/",
        cycle: "0 30 2 * * ?",
        target: "WB-HK-FIN-08",
        enabled: true,
        last: "2026-11-19 02:30:44",
        result: "成功",
        reason: "入库 18,204 行"
      },
      {
        name: "SG 信贷敞口快照",
        path: "/risk/sg/credit/exposure/",
        cycle: "0 0 4 * * MON-FRI",
        target: "WB-SG-RISK-03",
        enabled: true,
        last: "2026-11-19 04:00:12",
        result: "失败",
        reason: "源路径不可访问 · Permission denied"
      },
      {
        name: "JP 资金头寸月末",
        path: "/treasury/jp/position/eom/",
        cycle: "0 0 6 L * ?",
        target: "WB-JP-TRS-02",
        enabled: false,
        last: "2026-10-31 06:00:18",
        result: "成功",
        reason: "入库 6,408 行"
      }
    ];
    return `
      <div class="workbench-toolbar" style="border-top:0">
        <span class="text-tertiary" style="font-size:10px">定时任务将按配置周期自动从源路径捞取文件</span>
        <button class="btn btn-small btn-primary" type="button" data-action="new-schedule">${icon("plus")}新增定时任务</button>
      </div>
      <div class="table-wrap">
        <table class="data-table upload-table" aria-label="定时任务">
          <thead><tr><th>任务名称</th><th>源路径</th><th>执行周期</th><th>目标 Workbook</th><th>启停</th><th>上次执行时间 / 结果</th><th class="action-cell">操作</th></tr></thead>
          <tbody>
            ${tasks
              .map(
                (task) => `
                <tr class="${task.result === "失败" ? "inaccessible-row" : ""}">
                  <td><span class="strong">${task.name}</span>${task.result === "失败" ? '<span class="result-reason text-danger">路径告警</span>' : ""}</td>
                  <td><span class="task-path">${task.path}</span></td>
                  <td><span class="mono text-secondary">${task.cycle}</span></td>
                  <td><span class="mono">${task.target}</span></td>
                  <td><button class="switch ${task.enabled ? "on" : ""}" type="button" data-action="toggle-task" aria-label="${task.enabled ? "停用" : "启用"}任务"></button></td>
                  <td><span class="mono text-secondary">${task.last}</span><span class="result-reason ${task.result === "失败" ? "text-danger" : ""}">${task.result} · ${task.reason}</span></td>
                  <td class="action-cell"><div class="row-actions aligned row-actions--schedule"><button class="row-link" type="button" data-action="run-task">${icon("play")}立即执行</button><button class="row-link" type="button" data-action="task-history">${icon("history")}执行记录</button><button class="row-link" type="button" data-action="edit-schedule">${icon("edit")}编辑</button></div></td>
                </tr>`
              )
              .join("")}
          </tbody>
        </table>
      </div>
      <div class="table-footer"><span class="table-total">共 <strong>${tasks.length}</strong> 个定时任务</span><div class="pagination"><button disabled>${icon("back")}</button><button class="active">1</button><button disabled>${icon("chevron-right")}</button></div></div>`;
  }

  function renderUploads() {
    const isEmpty = state.demoState === "empty";
    const content =
      state.uploadTab === "uploads"
        ? isEmpty
          ? renderEmpty("暂无上传记录", "点击上传文件，将线下报送数据纳入平台管理。", "上传文件", "upload-file")
          : renderUploadRecords()
        : isEmpty
          ? renderEmpty("暂无定时任务", "创建定时任务后，系统将按周期从源路径自动捞取文件。", "新增定时任务", "new-schedule", "task")
          : renderScheduleTasks();
    return `
      <section class="page">
        ${renderPageHeader("线下数据上传管理", "管理本地报送文件、定时捞取任务及数据入库结果。", `<button class="btn btn-primary" type="button" data-action="upload-file">${icon("upload")}上传文件</button>`)}
        ${
          state.demoState === "failed"
            ? `<div class="alert-banner"><span class="alert-icon">${icon("alert")}</span><div class="alert-copy"><strong>存在数据入库异常</strong><p>定时任务「SG 信贷敞口快照」连续 2 次因源路径不可访问失败，请检查账号权限。</p></div><button class="btn btn-small" type="button" data-action="task-history">查看详情</button></div>`
            : ""
        }
        <div class="tabs-bar">
          <button class="tab-button ${state.uploadTab === "uploads" ? "active" : ""}" type="button" data-action="switch-upload-tab" data-tab="uploads">上传记录 <span class="count">${state.uploadedFiles.length}</span></button>
          <button class="tab-button ${state.uploadTab === "schedule" ? "active" : ""}" type="button" data-action="switch-upload-tab" data-tab="schedule">定时任务 <span class="count">3</span></button>
        </div>
        <div class="tab-content">${content}</div>
      </section>`;
  }

  function renderWorkflowList() {
    const groups = ["HK", "SG", "JP"];
    return groups
      .map((marketName) => {
        const items = state.workflows.filter((workflow) => workflow.market === marketName);
        if (!items.length) return "";
        return `
          <div class="workflow-group">
            <div class="workflow-group-label"><span>${marketName} MARKET</span><b>${items.length}</b></div>
            ${items
              .map(
                (workflow) => `
                <button class="workflow-list-item ${state.selectedWorkflow === workflow.id ? "active" : ""}" type="button" data-action="select-workflow" data-workflow="${workflow.id}">
                  <strong>${escapeHTML(workflow.name)} ${!workflow.enabled ? '<span class="pill pill-neutral" style="margin-left:auto">已禁用</span>' : ""}</strong>
                  <span>${workflow.nodes.length} 节点 · ${workflow.version} · ${workflow.updated.slice(5)}</span>
                </button>`
              )
              .join("")}
          </div>`;
      })
      .join("");
  }

  function renderWorkflowDetail() {
    const workflow = state.workflows.find((item) => item.id === state.selectedWorkflow) || state.workflows[0];
    return `
      <div class="workflow-detail ${workflow.enabled ? "" : "disabled-detail"}">
        <div class="workflow-detail-head">
          <div><h2>流程配置</h2><p>${workflow.id.toUpperCase()} · ${workflow.version} · 更新于 ${workflow.updated}</p></div>
          <div class="inline-toggle" style="min-width:170px"><span>${workflow.enabled ? "流程已启用" : "流程已禁用"}</span><button class="switch ${workflow.enabled ? "on" : ""}" type="button" data-action="toggle-workflow"></button></div>
        </div>
        <div class="form-section">
          <div class="form-section-title"><strong>基础信息</strong><span>禁用后不可被新任务引用，在途任务继续</span></div>
          <div class="form-grid">
            <div class="field-group"><label class="field-label">流程名称 <span class="required">*</span></label><input class="input" id="workflowName" value="${escapeHTML(workflow.name)}"></div>
            <div class="field-group"><label class="field-label">Market</label><input class="input readonly-input" value="${workflow.market}" readonly></div>
            <div class="field-group span-2"><label class="field-label">适用模块 <span class="required">*</span></label><div class="module-checks">
              ${["Reporting", "Validation", "全部"].map((moduleName) => `<label class="check-pill"><input type="checkbox" ${workflow.modules.includes(moduleName) || (moduleName === "全部" && workflow.modules.length === 2) ? "checked" : ""}>${moduleName}</label>`).join("")}
            </div></div>
          </div>
        </div>
        <div class="form-section">
          <div class="form-section-title"><strong>审批节点</strong><span>拖拽调整顺序，至少保留 1 个节点</span></div>
          <div class="node-list" id="nodeList">
            ${workflow.nodes
              .map(
                (node, index) => `
                <div class="node-card" draggable="true" data-node-index="${index}">
                  <button class="node-grip" type="button" aria-label="拖拽排序">${icon("grip")}</button>
                  <span class="node-order">${index + 1}</span>
                  <input class="input" data-node-field="name" value="${escapeHTML(node.name)}" aria-label="节点名称">
                  <select class="select" data-node-field="approver" aria-label="审批人">
                    <option>${escapeHTML(node.approver)}</option>
                    <option>陈思远 · 金融数据部</option>
                    <option>许文清 · 风险控制部</option>
                    <option>周安 · 合规管理部</option>
                    <option>梁嘉敏 · 金融数据部</option>
                  </select>
                  ${
                    workflow.nodes.length <= 1
                      ? `<span class="tooltip-wrap" data-tooltip="审批流程至少保留 1 个节点"><button class="node-delete" type="button" disabled>${icon("trash")}</button></span>`
                      : `<button class="node-delete" type="button" data-action="delete-node" data-node-index="${index}" aria-label="删除节点">${icon("trash")}</button>`
                  }
                </div>`
              )
              .join("")}
          </div>
          <button class="add-node" type="button" data-action="add-node">${icon("plus")}添加节点</button>
        </div>
        <div class="workflow-footer">
          <span class="workflow-footer-note">${icon("info")}发布新版本后，新任务将自动引用最新配置</span>
          <div class="workflow-footer-actions"><button class="btn" type="button" data-action="cancel-workflow">取消</button><button class="btn btn-primary" type="button" data-action="save-workflow">${icon("check")}保存</button></div>
        </div>
      </div>`;
  }

  function renderWorkflows() {
    return `
      <section class="page">
        ${renderPageHeader(
          "审批控制中心",
          "按 Market 配置 Reporting / Validation 审批流程与节点审批人。",
          `<select class="select" aria-label="Market 筛选" style="width:130px"><option>全部 Market</option><option>CN</option><option>HK</option><option>SG</option><option>JP</option></select><button class="btn btn-primary" type="button" data-action="new-workflow">${icon("plus")}新增流程</button>`
        )}
        <div class="workflow-layout">
          <aside class="workflow-list">
            <div class="workflow-list-head"><div class="search-field">${icon("search")}<input class="input" type="search" placeholder="搜索流程名称"></div></div>
            <div class="workflow-groups">${renderWorkflowList()}</div>
          </aside>
          ${renderWorkflowDetail()}
        </div>
      </section>`;
  }

  const workbenchTasks = {
    mine: [
      {
        id: "TASK-20261119-0048",
        record: "CNHSBC006A-20260331",
        rris: "RRIS-CN-G01-2026Q1",
        name: "G01 Asset and Liability Statement – Notes",
        module: "Reporting",
        status: "审批中",
        submitted: "2026-04-01 11:28",
        node: "口径审批 / 许文清",
        market: "CN"
      },
      {
        id: "TASK-20261118-0117",
        record: "REC-SG-240816-0034",
        rris: "RRIS-SG-09688",
        name: "新加坡分行信贷资产质量季报",
        module: "Reporting",
        status: "已通过",
        submitted: "2026-11-18 16:42",
        node: "流程已完成",
        market: "SG"
      },
      {
        id: "TASK-20261118-0093",
        record: "REC-JP-240818-0015",
        rris: "RRIS-JP-04418",
        name: "海外分支流动性压力测试表",
        module: "Validation",
        status: "已驳回",
        submitted: "2026-11-18 14:06",
        node: "数据复核 / Audrey Tan",
        market: "JP"
      }
    ],
    todo: [
      {
        id: "TASK-20261119-0052",
        record: "CNHSBC006A-20260331",
        rris: "RRIS-CN-G01-2026Q1",
        name: "G01 Asset and Liability Statement – Notes",
        module: "Reporting",
        status: "审批中",
        submitted: "2026-04-01 10:46",
        node: "口径审批",
        submitter: "林妍",
        market: "CN"
      },
      {
        id: "TASK-20261119-0049",
        record: "REC-SG-240819-0028",
        rris: "RRIS-SG-09728",
        name: "MAS 637 流动性风险月报",
        module: "Reporting",
        status: "审批中",
        submitted: "2026-11-19 09:52",
        node: "业务复核",
        submitter: "Audrey Tan",
        market: "SG"
      },
      {
        id: "TASK-20261118-0102",
        record: "REC-JP-240818-0013",
        rris: "RRIS-JP-04420",
        name: "东京分行利率风险日报",
        module: "Validation",
        status: "审批中",
        submitted: "2026-11-18 17:35",
        node: "区域终审",
        submitter: "佐藤 健",
        market: "JP"
      }
    ]
  };

  function renderWorkbenchRows() {
    const todo = state.workbenchTab === "todo";
    const rows = workbenchTasks[state.workbenchTab];
    if (!rows.length) {
      return `<tr><td colspan="${todo ? 10 : 9}">${renderEmpty(todo ? "暂无待办任务" : "暂无提交任务", todo ? "当前没有需要你审批的任务。" : "发起报表或规则审批后，可在此跟踪进度。", "返回模块首页", "go-home", "task")}</td></tr>`;
    }
    return rows
      .map(
        (task) => `
        <tr>
          <td><span class="task-id">${task.id}</span></td>
          <td><span class="mono text-secondary">${task.record}</span></td>
          <td><span class="mono text-secondary">${task.rris}</span></td>
          <td><div class="report-cell"><strong>${task.name}</strong><span>${task.market} · ${task.module}</span></div></td>
          <td><span class="biz-module">${icon(task.module === "Reporting" ? "report" : "validation")}${task.module}</span></td>
          ${todo ? `<td>${task.submitter}</td>` : ""}
          <td><span class="mono text-secondary">${task.submitted}</span></td>
          <td>
            ${
              todo
                ? `<span class="approval-state"><i class="dot orange"></i>${task.node}</span>`
                : `<span class="pill ${task.status === "审批中" ? "pill-orange" : task.status === "已通过" ? "pill-green-deep" : "pill-red"}">${task.status}</span><br><span class="result-reason">${task.node}</span>`
            }
          </td>
          ${todo ? `<td>${market(task.market)}</td>` : ""}
          <td class="action-cell">
            <div class="row-actions aligned row-actions--workbench">
              <button class="row-link" type="button" data-action="open-task" data-task="${task.id}" data-todo="${todo}">${icon("eye")}查看详情</button>
              ${
                todo
                  ? `<button class="row-link" type="button" data-action="approve-task" data-task="${task.id}">${icon("check")}通过</button><button class="row-link danger" type="button" data-action="reject-task" data-task="${task.id}">${icon("close")}驳回</button>`
                  : task.status === "审批中"
                    ? `${disabledAction("撤回", "任务已进入审批，无法撤回")}<span class="action-placeholder" aria-hidden="true"></span>`
                    : `<span class="action-placeholder" aria-hidden="true"></span><span class="action-placeholder" aria-hidden="true"></span>`
              }
            </div>
          </td>
        </tr>`
      )
      .join("");
  }

  function renderWorkbench() {
    const isLoading = state.demoState === "empty";
    return `
      <section class="page">
        ${renderPageHeader("审批工作台", "集中处理报表与 Validation 规则审批，查看快照、链路及回传结果。", `<span class="sync-meta">${icon("clock")}更新于 2026-11-19 15:42</span><button class="btn" type="button" data-action="refresh-preview">${icon("refresh")}刷新</button>`)}
        <div class="workbench-layout">
          <aside class="workbench-nav">
            <div class="workbench-nav-label">审批任务</div>
            <button class="${state.workbenchTab === "mine" ? "active" : ""}" type="button" data-action="switch-workbench-tab" data-tab="mine">${icon("list")}我的任务 <span>12</span></button>
            <button class="${state.workbenchTab === "todo" ? "active" : ""}" type="button" data-action="switch-workbench-tab" data-tab="todo">${icon("approval")}待办任务 <span>7</span></button>
          </aside>
          <div class="workbench-main">
            <div class="workbench-toolbar"><h2>${state.workbenchTab === "mine" ? "我的任务" : "待办任务"}<span>${isLoading ? 0 : workbenchTasks[state.workbenchTab].length} ITEMS</span></h2><div class="search-field" style="max-width:280px">${icon("search")}<input class="input" type="search" placeholder="搜索任务 ID / 报表名称"></div></div>
            <div class="table-wrap">
              <table class="data-table workbench-table" aria-label="${state.workbenchTab === "mine" ? "我的任务" : "待办任务"}">
                <thead><tr>
                  <th>任务ID</th><th>record_id</th><th>rris_id</th><th>report_name</th><th>biz_module</th>${state.workbenchTab === "todo" ? "<th>提交人</th>" : ""}<th>提交时间</th><th>${state.workbenchTab === "todo" ? "当前节点 / Market" : "状态 / 当前节点"}</th>${state.workbenchTab === "todo" ? "<th>Market</th>" : ""}<th class="action-cell">操作</th>
                </tr></thead>
                <tbody>${isLoading ? "" : renderWorkbenchRows()}</tbody>
              </table>
              ${isLoading ? renderEmpty(state.workbenchTab === "todo" ? "暂无待办任务" : "暂无提交任务", state.workbenchTab === "todo" ? "当前没有需要你审批的任务。" : "发起报表或规则审批后，可在此跟踪进度。", "返回模块首页", "go-home", "task") : ""}
            </div>
            ${isLoading ? "" : `<div class="table-footer"><span class="table-total">共 <strong>${workbenchTasks[state.workbenchTab].length}</strong> 条任务</span><div class="pagination"><button disabled>${icon("back")}</button><button class="active">1</button><button disabled>${icon("chevron-right")}</button><span class="page-size">每页 <select><option>20</option></select> 条</span></div></div>`}
          </div>
        </div>
      </section>`;
  }

  function toast(message, type = "success") {
    const node = document.createElement("div");
    node.className = `toast ${type}`;
    node.innerHTML = `${icon(type === "error" ? "alert" : type === "info" ? "info" : "check")}<span>${escapeHTML(message)}</span>`;
    toastHost.appendChild(node);
    applyTranslations(node);
    setTimeout(() => {
      node.style.opacity = "0";
      node.style.transform = "translateY(5px)";
      node.style.transition = "opacity .18s, transform .18s";
      setTimeout(() => node.remove(), 200);
    }, 2000);
  }

  async function copyText(value) {
    if (!value) {
      toast("当前内容为空，无法复制", "error");
      return;
    }
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(value);
      } else {
        const input = document.createElement("textarea");
        input.value = value;
        input.style.position = "fixed";
        input.style.opacity = "0";
        document.body.appendChild(input);
        input.select();
        document.execCommand("copy");
        input.remove();
      }
      toast("已复制到剪贴板", "success");
    } catch {
      toast("复制失败，请手动选择内容", "error");
    }
  }

  function openOverlay(html, { locked = false } = {}) {
    overlayHost.innerHTML = html;
    overlayHost.dataset.locked = locked ? "true" : "false";
    overlayHost.classList.add("open");
    applyTranslations(overlayHost);
    const focusable = overlayHost.querySelector("button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled])");
    setTimeout(() => focusable?.focus({ preventScroll: true }), 30);
  }

  function closeOverlay(force = false) {
    if (overlayHost.dataset.locked === "true" && !force) return;
    overlayHost.classList.remove("open");
    overlayHost.dataset.locked = "false";
    overlayHost.innerHTML = "";
  }

  function confirmModal({ title, description, checkbox, confirmText = "确认", action, extra = "" }) {
    openOverlay(`
      <div class="modal" role="dialog" aria-modal="true" aria-labelledby="confirmTitle">
        <div class="modal-header">
          <div class="modal-title"><h2 id="confirmTitle">${escapeHTML(title)}</h2></div>
          <button class="modal-close" type="button" data-action="close-overlay" aria-label="关闭">${icon("close")}</button>
        </div>
        <div class="modal-body">
          <div class="confirm-layout"><span class="alert-icon">${icon("alert")}</span><p>${description}</p></div>
          ${checkbox ? `<label class="check-option"><input type="checkbox" id="confirmCheckbox"><span>${escapeHTML(checkbox)}</span></label>` : ""}
          ${extra}
        </div>
        <div class="modal-footer">
          <button class="btn" type="button" data-action="close-overlay">取消</button>
          ${
            checkbox
              ? `<span class="tooltip-wrap" data-tooltip="请先勾选确认项" id="confirmButtonWrap"><button class="btn btn-primary" id="confirmActionButton" type="button" data-action="${action}" disabled>${icon("check")}${escapeHTML(confirmText)}</button></span>`
              : `<button class="btn btn-primary" type="button" data-action="${action}">${icon("check")}${escapeHTML(confirmText)}</button>`
          }
        </div>
      </div>`);
    if (checkbox) {
      document.getElementById("confirmCheckbox").addEventListener("change", (event) => {
        const button = document.getElementById("confirmActionButton");
        button.disabled = !event.target.checked;
        document.getElementById("confirmButtonWrap").dataset.tooltip = event.target.checked ? "确认执行当前操作" : "请先勾选确认项";
      });
    }
  }

  function showProgress(kind) {
    const isValidation = kind === "validation";
    openOverlay(
      `
      <div class="progress-panel" role="dialog" aria-modal="true" aria-labelledby="progressTitle">
        <span class="progress-icon">${icon(isValidation ? "validation" : "report")}</span>
        <h2 id="progressTitle">${isValidation ? "正在生成 Validation 规则" : "正在生成 AI 分析内容"}</h2>
        <p>${isValidation ? "正在解析监管发文、计算逻辑与 Workbook 候选表，请勿关闭页面。" : "正在解析报送文件并生成 BRD、FSD、SQL 与伪代码，请勿关闭页面。"}</p>
        <div class="progress-track"><div class="progress-bar" id="progressBar"></div></div>
        <div class="progress-meta"><span>生成中，请勿关闭页面</span><strong id="progressPercent">8%</strong></div>
      </div>`,
      { locked: true }
    );
    let progress = 8;
    const timer = setInterval(() => {
      progress = Math.min(progress + Math.ceil(Math.random() * 17), 92);
      const bar = document.getElementById("progressBar");
      const label = document.getElementById("progressPercent");
      if (bar) bar.style.width = `${progress}%`;
      if (label) label.textContent = `${progress}%`;
    }, 260);
    setTimeout(() => {
      clearInterval(timer);
      const bar = document.getElementById("progressBar");
      const label = document.getElementById("progressPercent");
      if (bar) bar.style.width = "100%";
      if (label) label.textContent = "100%";
      setTimeout(() => {
        closeOverlay(true);
        toast(isValidation ? "规则生成完成，可在详情中人工复核" : "AI 分析生成完成，已进入待确认状态");
      }, 420);
    }, 2250);
  }

  function openDeleteConfirm(record) {
    confirmModal({
      title: "删除报表底表",
      description: "删除后该 record 将从清单移除，PUMA 源数据不受影响；确认删除？",
      confirmText: "确认删除",
      action: "confirm-delete-report",
      extra: `<input type="hidden" id="deleteRecordId" value="${record}">`
    });
  }

  function openNewReportModal() {
    openOverlay(`
      <div class="modal modal-xl" role="dialog" aria-modal="true" aria-labelledby="newReportTitle">
        <div class="modal-header">
          <div class="modal-title"><h2 id="newReportTitle">从 PUMA 选择报表底表</h2><p>仅展示当前账号有权限访问的报送 record</p></div>
          <button class="modal-close" type="button" data-action="close-overlay">${icon("close")}</button>
        </div>
        <div class="candidate-toolbar"><div class="search-field">${icon("search")}<input class="input" type="search" placeholder="搜索 record ID / 报表名称"></div></div>
        <div class="modal-body flush">
          <div class="table-wrap">
            <table class="data-table">
              <thead><tr><th style="width:42px"></th><th>record_id</th><th>rris_id</th><th>report_name</th><th>market</th><th>report_freq</th></tr></thead>
              <tbody>
                ${[
                  ["CNHSBC006A-20260630", "RRIS-CN-G01-2026Q2", "G01 Asset and Liability Statement – Notes", "CN", "Quarterly"],
                  ["CNHSBC006A-20251231", "RRIS-CN-G01-2025Q4", "G01 Asset and Liability Statement – 2025 Q4", "CN", "Quarterly"],
                  ["REC-HK-240819-0053", "RRIS-HK-11902", "HKMA Foreign Currency Position Report", "HK", "Daily"]
                ]
                  .map(
                    (row, index) => `<tr data-action="select-puma-row" data-record="${row[0]}"><td><input type="radio" name="pumaRecord" ${index === 0 ? "checked" : ""}></td><td><span class="mono">${row[0]}</span></td><td><span class="mono">${row[1]}</span></td><td>${row[2]}</td><td>${market(row[3])}</td><td><span class="mono">${row[4]}</span></td></tr>`
                  )
                  .join("")}
              </tbody>
            </table>
          </div>
        </div>
        <div class="modal-footer"><button class="btn" type="button" data-action="close-overlay">取消</button><button class="btn btn-primary" type="button" data-action="confirm-new-report">${icon("plus")}新增并配置</button></div>
      </div>`);
  }

  function openUploadModal() {
    openOverlay(`
      <div class="modal" role="dialog" aria-modal="true" aria-labelledby="uploadTitle">
        <div class="modal-header"><div class="modal-title"><h2 id="uploadTitle">上传报送文件</h2><p>文件将进入当前 Workbook 的待入库区</p></div><button class="modal-close" type="button" data-action="close-overlay">${icon("close")}</button></div>
        <div class="modal-body">
          <div class="upload-dropzone" data-action="pick-file"><span>${icon("upload-cloud")}</span><strong>拖拽文件到此处，或点击选择</strong><span>支持 XLSX、CSV、PDF，单文件最大 50 MB</span></div>
          <div class="form-grid" style="margin-top:16px">
            <div class="field-group"><label class="field-label">目标 Workbook</label><select class="select"><option>WB-HK-FIN-08</option><option>WB-HK-RISK-02</option></select></div>
            <div class="field-group"><label class="field-label">数据日期</label><input class="input" type="date" value="2026-11-19"></div>
            <div class="field-group span-2"><label class="field-label">备注</label><input class="input" placeholder="选填，说明文件来源或口径变更"></div>
          </div>
        </div>
        <div class="modal-footer"><button class="btn" type="button" data-action="close-overlay">取消</button><button class="btn btn-primary" type="button" data-action="confirm-upload">${icon("upload")}开始上传</button></div>
      </div>`);
  }

  function openScheduleModal() {
    openOverlay(`
      <div class="modal" role="dialog" aria-modal="true" aria-labelledby="scheduleTitle">
        <div class="modal-header"><div class="modal-title"><h2 id="scheduleTitle">新增定时任务</h2><p>系统将按执行周期从源路径自动捞取文件</p></div><button class="modal-close" type="button" data-action="close-overlay">${icon("close")}</button></div>
        <div class="modal-body">
          <div class="form-grid">
            <div class="field-group span-2"><label class="field-label">任务名称 <span class="required">*</span></label><input class="input" placeholder="如：HK 总账日终数据"></div>
            <div class="field-group span-2"><label class="field-label">源路径 <span class="required">*</span></label><input class="input mono" placeholder="/finance/hk/gl/daily/"><div class="hint">${icon("info")}源路径需当前服务账号具备读取权限</div></div>
            <div class="field-group"><label class="field-label">执行周期 cron <span class="required">*</span></label><input class="input mono" value="0 30 2 * * ?"></div>
            <div class="field-group"><label class="field-label">目标 Workbook</label><select class="select"><option>WB-HK-FIN-08</option><option>WB-HK-RISK-02</option></select></div>
            <div class="field-group span-2"><div class="inline-toggle"><span>创建后立即启用</span><button class="switch on" type="button" data-action="toggle-switch"></button></div></div>
          </div>
        </div>
        <div class="modal-footer"><button class="btn" type="button" data-action="close-overlay">取消</button><button class="btn btn-primary" type="button" data-action="confirm-schedule">${icon("calendar")}创建任务</button></div>
      </div>`);
  }

  function openNewWorkflowModal() {
    openOverlay(`
      <div class="modal" role="dialog" aria-modal="true" aria-labelledby="workflowModalTitle">
        <div class="modal-header"><div class="modal-title"><h2 id="workflowModalTitle">新增审批流程</h2><p>创建后可在流程详情中继续添加审批节点</p></div><button class="modal-close" type="button" data-action="close-overlay">${icon("close")}</button></div>
        <div class="modal-body">
          <div class="form-grid">
            <div class="field-group span-2"><label class="field-label">流程名称 <span class="required">*</span></label><input class="input" id="newWorkflowName" placeholder="请输入流程名称"></div>
            <div class="field-group"><label class="field-label">Market</label><select class="select" id="newWorkflowMarket"><option>CN</option><option>HK</option><option>SG</option><option>JP</option></select></div>
            <div class="field-group"><label class="field-label">适用模块</label><select class="select"><option>全部</option><option>Reporting</option><option>Validation</option></select></div>
            <div class="field-group span-2"><div class="inline-toggle"><span>创建后立即启用</span><button class="switch on" type="button" data-action="toggle-switch"></button></div></div>
          </div>
        </div>
        <div class="modal-footer"><button class="btn" type="button" data-action="close-overlay">取消</button><button class="btn btn-primary" type="button" data-action="confirm-new-workflow">${icon("plus")}创建流程</button></div>
      </div>`);
  }

  function openApprovalConfirm() {
    confirmModal({
      title: "确认提交审批",
      description: "提交后当前 Validation 规则将生成只读审批快照，全部字段与评论不可再修改。确认提交？",
      checkbox: "已人工复核口径与规则表达式",
      confirmText: "提交审批",
      action: "confirm-submit-approval"
    });
  }

  function openRuleDrawer(ruleSeq) {
    const rule = validationRules.find((item) => item.seq === ruleSeq) || validationRules[0];
    openOverlay(`
      <aside class="drawer" role="dialog" aria-modal="true" aria-labelledby="ruleDrawerTitle">
        <div class="drawer-header">
          <div><h2 id="ruleDrawerTitle">规则 ${escapeHTML(rule.seq)}</h2><p>RULE_ID · ${escapeHTML(rule.seq)}-20261119</p></div>
          <button class="modal-close" type="button" data-action="close-overlay">${icon("close")}</button>
        </div>
        <div class="drawer-tabs">
          <button class="drawer-tab active" type="button" data-action="drawer-first-tab">全字段</button>
          <button class="drawer-tab" type="button" data-action="drawer-comment-tab">评论 (${rule.comments})</button>
          <button class="drawer-tab" type="button" data-action="drawer-history-tab">修改历史 (2)</button>
        </div>
        <div class="drawer-body rule-detail-block" id="drawerBody">
          <div class="info-list">
            <div class="info-row"><span>rule_seq</span><strong class="mono">${escapeHTML(rule.seq)}</strong></div>
            <div class="info-row"><span>rule_content</span><strong>${escapeHTML(rule.content)}</strong></div>
            <div class="info-row"><span>rule_logic</span><strong>${escapeHTML(rule.logic)}</strong></div>
            <div class="info-row"><span>rule_expr</span><strong class="mono">${escapeHTML(rule.expr)}</strong></div>
            <div class="info-row"><span>rule_freq</span><strong class="mono">${escapeHTML(rule.freq)}</strong></div>
            <div class="info-row"><span>rule_status</span><strong>${pill(rule.status, rule.status === "已人工调整" ? "pill-purple" : "")}</strong></div>
            <div class="info-row"><span>数据来源</span><strong class="mono">HUB_GL_BALANCE_DAILY · HUB_CUSTOMER_RELATION</strong></div>
          </div>
          <div class="drawer-section">
            <div class="drawer-section-title"><span>规则表达式</span><button class="copy-icon" type="button" data-action="copy" data-copy="${escapeHTML(rule.expr)}" data-tooltip="复制表达式">${icon("copy")}</button></div>
            <pre class="code-panel">${escapeHTML(rule.expr)}</pre>
          </div>
          <div class="drawer-section">
            <div class="drawer-section-title"><span>业务说明</span><span class="text-tertiary" style="font-size:9px">REG_DOC p.18</span></div>
            <div class="content-panel"><p>本规则依据 MAS Notice 651 第 8.2 条生成。规则命中时，报表字段将阻断提交，并提示业务补充交易对手关系树映射。</p></div>
          </div>
        </div>
        <div class="drawer-footer"><button class="btn" type="button" data-action="close-overlay">关闭</button></div>
      </aside>`);
  }

  function findTask(taskId) {
    return [...workbenchTasks.mine, ...workbenchTasks.todo].find((task) => task.id === taskId);
  }

  function approvalTimeline() {
    return `
      <div class="timeline">
        <div class="timeline-item done"><span class="timeline-marker">${icon("check")}</span><div class="timeline-copy"><strong>任务提交</strong><p>林妍 · 金融数据部</p></div><span class="timeline-time">11-19 10:46</span></div>
        <div class="timeline-item done"><span class="timeline-marker">${icon("check")}</span><div class="timeline-copy"><strong>业务复核 · 陈思远</strong><p>通过 · 口径与附件已完成核对</p></div><span class="timeline-time">11-19 11:12</span></div>
        <div class="timeline-item current"><span class="timeline-marker">${icon("clock")}</span><div class="timeline-copy"><strong>口径审批 · 许文清</strong><p>当前节点 · 等待审批</p></div><span class="timeline-time">进行中</span></div>
        <div class="timeline-item unreached"><span class="timeline-marker">${icon("user")}</span><div class="timeline-copy"><strong>合规终审 · 周安</strong><p>尚未到达</p></div><span class="timeline-time">—</span></div>
      </div>`;
  }

  function openTaskModal(taskId, fromTodo = false) {
    const task = findTask(taskId) || workbenchTasks.mine[0];
    openOverlay(`
      <div class="modal modal-task" role="dialog" aria-modal="true" aria-labelledby="taskModalTitle">
        <div class="modal-header">
          <div class="modal-title"><h2 id="taskModalTitle">${escapeHTML(task.name)}</h2><p>${task.id} · ${task.record} · ${task.rris} · ${task.market}</p></div>
          <div style="display:flex;align-items:center;gap:9px">${pill("审批中")}<button class="modal-close" type="button" data-action="close-overlay">${icon("close")}</button></div>
        </div>
        <div class="task-tabs">
          <button class="task-tab active" type="button" data-action="task-modal-tab" data-tab="snapshot">只读快照</button>
          <button class="task-tab" type="button" data-action="task-modal-tab" data-tab="comments">评论汇总 <span class="badge-count">6</span></button>
          <button class="task-tab" type="button" data-action="task-modal-tab" data-tab="chain">审批链路</button>
        </div>
        <div class="modal-body">
          <div class="task-tab-body active" data-task-body="snapshot">
            <div class="snapshot-grid">
              <div class="snapshot-block">
                <div class="snapshot-block-head"><strong>报表底表快照</strong><span>Reporting · v2</span></div>
                <div class="snapshot-content">
                  <p><span class="label">record_id：</span><span class="code-inline">${task.record}</span></p>
                  <p><span class="label">report_name：</span>${task.name}</p>
                  <p><span class="label">data_scope：</span>Domestic consolidated data</p>
                  <p><span class="label">附件：</span>20260331_G01_Submitted.xlsx、StarRocks_loan_quality_report.sql</p>
                </div>
              </div>
              <div class="snapshot-block">
                <div class="snapshot-block-head"><strong>规则快照</strong><span>Validation · v2</span></div>
                <div class="snapshot-content">
                  <p><span class="label">映射项：</span><strong>11</strong> · 复核一致 <strong>11</strong></p>
                  <p><span class="label">C6：</span>Total loans = SUM(C7, C10)</p>
                  <p><span class="label">rule_expr：</span><span class="code-inline">reserved_field24 &gt; 2 / 3</span></p>
                  <p><span class="label">BRD / FSD：</span>11 mapped cells</p>
                </div>
              </div>
            </div>
            <div style="margin-top:14px" class="return-status">
              <span class="file-icon">${icon("refresh")}</span>
              <div class="return-copy"><strong>回传失败 · 等待重试</strong><span>G01 Regulatory Gateway returned 503. Last retry: 2026-04-01 11:30:18</span></div>
              <button class="btn btn-small btn-danger" type="button" data-action="retry-return">${icon("refresh")}回传重试</button>
            </div>
          </div>
          <div class="task-tab-body" data-task-body="comments">
            <div class="comment-list">
              <div class="comment-item"><span class="comment-avatar">CY</span><div class="comment-copy"><div class="comment-meta"><strong>陈思远</strong><span>2026-04-01 11:12 · 业务复核</span></div><p>${state.lang === "en" ? "The submitted values match the G01 filing. All eleven mapped items can proceed to the next node." : "报送值与 G01 填报口径一致，11 个映射项可进入下一节点。"}</p></div></div>
              <div class="comment-item"><span class="comment-avatar">LY</span><div class="comment-copy"><div class="comment-meta"><strong>林妍</strong><span>2026-04-01 10:54 · 提交人</span></div><p>${state.lang === "en" ? "The credit-card overdue counts use reserved_field24, and the full mapping history is attached." : "信用卡逾期期数已使用 reserved_field24，完整映射历史已附在快照中。"}</p></div></div>
              <div class="comment-item"><span class="comment-avatar">XW</span><div class="comment-copy"><div class="comment-meta"><strong>许文清</strong><span>2026-04-01 11:18 · 当前审批人</span></div><p>${state.lang === "en" ? "Please confirm the explicit zero for doubtful loans after completeness and uniqueness checks pass." : "请确认可疑类贷款在完整性与唯一键校验通过后，显式 0 的输出口径。"}</p></div></div>
            </div>
          </div>
          <div class="task-tab-body" data-task-body="chain">
            <div style="display:grid;grid-template-columns:1.3fr .8fr;gap:22px">
              <div>${approvalTimeline()}</div>
              <div class="snapshot-block"><div class="snapshot-block-head"><strong>审批信息</strong><span>PROCESS</span></div><div class="snapshot-content"><p><span class="label">流程：</span>香港监管报送标准审批 v3.4</p><p><span class="label">当前节点：</span>口径审批</p><p><span class="label">当前审批人：</span>许文清</p><p><span class="label">预计 SLA：</span>2026-11-19 18:00</p></div></div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn" type="button" data-action="close-overlay">关闭</button>
          ${fromTodo ? `<button class="btn btn-danger" type="button" data-action="reject-task" data-task="${task.id}">${icon("close")}驳回</button><button class="btn btn-primary" type="button" data-action="approve-task" data-task="${task.id}">${icon("check")}通过</button>` : ""}
        </div>
      </div>`);
  }

  function openRejectModal(taskId) {
    openOverlay(`
      <div class="modal" role="dialog" aria-modal="true" aria-labelledby="rejectTitle">
        <div class="modal-header"><div class="modal-title"><h2 id="rejectTitle">驳回任务</h2><p>驳回意见将同步给提交人与流程中的相关成员</p></div><button class="modal-close" type="button" data-action="close-overlay">${icon("close")}</button></div>
        <div class="modal-body">
          <div class="reject-reason field-group"><label class="field-label">驳回意见 <span class="required">*</span></label><textarea class="textarea" id="rejectOpinion" placeholder="请填写明确的驳回原因与修改建议"></textarea><div class="modal-error" id="rejectError">请填写驳回意见后再提交。</div></div>
        </div>
        <div class="modal-footer"><button class="btn" type="button" data-action="close-overlay">取消</button><button class="btn btn-danger" type="button" data-action="confirm-reject" data-task="${taskId}">${icon("close")}确认驳回</button></div>
      </div>`);
  }

  const breadcrumbMap = {
    home: ["工作空间", "模块首页"],
    reporting: ["AI 生成", "Reporting", "报表底表清单"],
    "reporting-config": ["AI 生成", "Reporting", "AI 分析配置"],
    "reporting-detail": ["AI 生成", "Reporting", "报表详情"],
    validation: ["AI 生成", "Validation", "校验规则"],
    "validation-config": ["AI 生成", "Validation", "规则配置"],
    "validation-detail": ["AI 生成", "Validation", "规则详情"],
    uploads: ["数据资产", "线下数据上传"],
    workbench: ["审批协作", "审批工作台"],
    workflows: ["审批协作", "审批控制中心", "流程配置"]
  };

  const routeRenderers = {
    home: renderHome,
    reporting: renderReporting,
    "reporting-config": renderReportingConfig,
    "reporting-detail": renderReportingDetail,
    validation: renderValidationList,
    "validation-config": renderValidationConfig,
    "validation-detail": renderValidationDetail,
    uploads: renderUploads,
    workbench: renderWorkbench,
    workflows: renderWorkflows
  };

  function currentRoute() {
    const route = location.hash.replace(/^#/, "") || "home";
    return routeRenderers[route] ? route : "home";
  }

  function activeNavRoute(route) {
    if (route.startsWith("reporting")) return "reporting";
    if (route.startsWith("validation")) return "validation";
    return route;
  }

  function updateBreadcrumb(route) {
    const items = breadcrumbMap[route] || breadcrumbMap.home;
    breadcrumb.innerHTML = items
      .map((item, index) => `${index < items.length - 1 ? `<span>${escapeHTML(item)}</span>${icon("chevron-right")}` : `<strong>${escapeHTML(item)}</strong>`}`)
      .join("");
  }

  function updateNav(route) {
    const active = activeNavRoute(route);
    document.querySelectorAll(".nav-item[data-route]").forEach((item) => item.classList.toggle("active", item.dataset.route === active));
  }

  function render() {
    const route = currentRoute();
    if (route === "workflows" && state.role !== "admin") {
      location.hash = "#home";
      toast("当前账号无审批控制中心权限", "error");
      return;
    }
    updateNav(route);
    updateBreadcrumb(route);
    pageView.innerHTML = routeRenderers[route]();
    applyTranslations(pageView);
    bindPageInteractions(route);
    if (route === "workflows") bindWorkflowDrag();
    applyTranslations(document.body);
  }

  function navigate(route) {
    if (currentRoute() === route) {
      render();
    } else {
      location.hash = `#${route}`;
    }
  }

  function syncWorkflowFields() {
    const workflow = state.workflows.find((item) => item.id === state.selectedWorkflow);
    if (!workflow) return;
    const nameInput = document.getElementById("workflowName");
    if (nameInput) workflow.name = nameInput.value.trim();
    const moduleChecks = [...document.querySelectorAll(".module-checks input")];
    if (moduleChecks.length) {
      const selected = moduleChecks
        .filter((input) => input.checked)
        .map((input) => input.parentElement.textContent.trim())
        .filter((moduleName) => moduleName !== "全部");
      workflow.modules = selected.length ? selected : ["Reporting", "Validation"];
    }
    document.querySelectorAll(".node-card").forEach((nodeCard, index) => {
      if (!workflow.nodes[index]) return;
      workflow.nodes[index].name = nodeCard.querySelector('[data-node-field="name"]')?.value.trim() || `节点 ${index + 1}`;
      workflow.nodes[index].approver = nodeCard.querySelector('[data-node-field="approver"]')?.value || workflow.nodes[index].approver;
    });
  }

  function bindPageInteractions(route) {
    const reportSearch = document.getElementById("reportSearch");
    const reportMarket = document.getElementById("reportMarketFilter");
    const reportStatus = document.getElementById("reportStatusFilter");
    [reportSearch, reportMarket, reportStatus].forEach((input) => {
      input?.addEventListener("input", () => {
        const body = document.getElementById("reportTableBody");
        if (body) {
          body.innerHTML = reportTableBody();
          applyTranslations(body);
        }
      });
    });

    const validationSearch = document.getElementById("validationSearch");
    const validationMarket = document.getElementById("validationMarketFilter");
    const validationFreq = document.getElementById("validationFreqFilter");
    const validationStatus = document.getElementById("validationStatusFilter");
    [validationSearch, validationMarket, validationFreq, validationStatus].forEach((input) => {
      input?.addEventListener("input", () => {
        const table = document.querySelector(".data-table tbody");
        if (table && route === "validation") {
          table.innerHTML = validationTableBody();
          applyTranslations(table);
        }
      });
    });

    const candidateSearch = document.getElementById("candidateSearch");
    candidateSearch?.addEventListener("input", () => {
      const query = candidateSearch.value.trim().toLowerCase();
      document.querySelectorAll(".candidate-row").forEach((row) => {
        row.style.display = row.textContent.toLowerCase().includes(query) ? "" : "none";
      });
    });

    if (route === "reporting-detail") {
      document.querySelectorAll("#excelGrid [data-excel-cell]").forEach((cell) => {
        cell.addEventListener("click", () => selectExcelCell(cell));
        cell.addEventListener("dblclick", () => {
          openCellModal(cell.dataset.excelCell, cell.dataset.desc || "业务字段口径");
        });
        cell.addEventListener("contextmenu", (event) => {
          event.preventDefault();
          event.stopPropagation();
          openExcelContextMenu(event, cell);
        });
      });
      document.getElementById("templateVersionSelect")?.addEventListener("change", (event) => {
        state.reportTemplateVersion = event.target.value;
        render();
        toast(`已切换至表样 ${state.reportTemplateVersion}`, "info");
      });
    }

    document.querySelectorAll(".rule-edit, .freq-select").forEach((field) => {
      field.addEventListener("change", () => {
        if (state.submitted) return;
        const rule = validationRules.find((item) => item.seq === field.dataset.rule);
        if (!rule) return;
        rule.status = "已人工调整";
        rule[field.dataset.field] = field.value;
        const statusCell = field.closest("tr")?.querySelector("td:nth-child(6)");
        if (statusCell) {
          statusCell.innerHTML = pill("已人工调整", "pill-purple");
          applyTranslations(statusCell);
        }
        toast(`${rule.seq} 已保存修改并标记为“已人工调整”`);
      });
    });

    document.querySelectorAll("[data-node-field]").forEach((input) => {
      input.addEventListener("change", syncWorkflowFields);
    });
  }

  function bindWorkflowDrag() {
    const list = document.getElementById("nodeList");
    if (!list) return;
    let dragging = null;
    list.querySelectorAll(".node-card").forEach((card) => {
      card.addEventListener("dragstart", () => {
        dragging = card;
        card.classList.add("dragging");
      });
      card.addEventListener("dragend", () => {
        card.classList.remove("dragging");
        list.querySelectorAll(".node-card").forEach((item) => item.classList.remove("drag-over"));
        dragging = null;
      });
      card.addEventListener("dragover", (event) => {
        event.preventDefault();
        if (dragging && dragging !== card) card.classList.add("drag-over");
      });
      card.addEventListener("dragleave", () => card.classList.remove("drag-over"));
      card.addEventListener("drop", (event) => {
        event.preventDefault();
        if (!dragging || dragging === card) return;
        syncWorkflowFields();
        const workflow = state.workflows.find((item) => item.id === state.selectedWorkflow);
        const from = Number(dragging.dataset.nodeIndex);
        const to = Number(card.dataset.nodeIndex);
        const [moved] = workflow.nodes.splice(from, 1);
        workflow.nodes.splice(to, 0, moved);
        render();
        toast("审批节点顺序已更新，保存后生效");
      });
    });
  }

  function handleAction(action, element) {
    switch (action) {
      case "copy":
        copyText(element.dataset.copy || "");
        break;
      case "close-overlay":
        closeOverlay();
        break;
      case "go-home":
        navigate("home");
        break;
      case "go-reporting":
        navigate("reporting");
        break;
      case "go-validation":
        navigate("validation");
        break;
      case "contact-admin":
        toast("已生成权限申请入口，请联系管理员确认", "info");
        break;
      case "page-preview":
        toast("当前原型仅展示第 1 页数据", "info");
        break;
      case "sync-reporting":
        toast("已触发 PUMA 增量拉取，预计 30 秒完成", "info");
        break;
      case "sync-validation":
        toast("已触发 RRIS 表单同步", "info");
        break;
      case "refresh-preview":
        toast("数据已刷新");
        break;
      case "switch-excel-sheet":
        state.reportSheet = element.dataset.sheet;
        render();
        break;
      case "open-template-versions":
        openTemplateVersions();
        break;
      case "open-template-upload":
        openTemplateUploadModal();
        break;
      case "pick-template-file":
        toast("新版表样文件选择器已打开（原型演示）", "info");
        break;
      case "excel-open-cell":
        openCellModal(element.dataset.cell, element.dataset.desc || "业务字段口径");
        break;
      case "excel-copy-value":
        copyText(element.dataset.copy || "");
        break;
      case "preview-template-version":
        state.reportTemplateVersion = element.dataset.version;
        closeOverlay(true);
        navigate("reporting-detail");
        toast(`正在查看表样 ${element.dataset.version}`, "info");
        break;
      case "compare-template-version":
        toast(`已加载 ${element.dataset.version} 与当前逻辑版本的差异`, "info");
        break;
      case "download-template":
      case "download-template-version":
        toast("表样文件下载任务已创建");
        break;
      case "use-latest-template":
        state.reportTemplateVersion = templateVersions[0].version;
        render();
        toast("已切换至最新表样版本");
        break;
      case "confirm-template-upload": {
        const version = document.getElementById("newTemplateVersion")?.value.trim();
        if (!version) {
          toast("请输入新版本号", "error");
          break;
        }
        templateVersions.forEach((item) => {
          item.status = "archived";
        });
        templateVersions.unshift({
          version,
          fileName: `${version.replaceAll(".", "")}_G01_Base.xlsx`,
          status: "current",
          policy: "G01 资产负债项目统计表 2026-Q2",
          policyBatch: "PBOC-G01-2026Q2",
          logicVersion: "G01-LOGIC-204",
          effectiveDate: "2026-06-30",
          uploadedAt: "2026-07-02 10:18",
          uploader: "林妍",
          cells: 55,
          sheets: 5,
          changeCount: 3
        });
        state.reportTemplateVersion = version;
        closeOverlay();
        render();
        toast(`表样 ${version} 已上传并创建逻辑版本`);
        break;
      }
      case "new-report":
        openNewReportModal();
        break;
      case "confirm-new-report":
        closeOverlay();
        navigate("reporting-config");
        toast("已选报表，请完善 AI 分析配置", "info");
        break;
      case "open-report": {
        const row = state.reportRows.find((item) => item.record_id === element.dataset.record);
        navigate(row?.ai_gen_status === "未发起" ? "reporting-config" : "reporting-detail");
        break;
      }
      case "delete-report":
        openDeleteConfirm(element.dataset.record);
        break;
      case "confirm-delete-report": {
        const record = document.getElementById("deleteRecordId")?.value;
        state.reportRows = state.reportRows.filter((item) => item.record_id !== record);
        closeOverlay();
        render();
        toast("报表底表已从清单移除，PUMA 源数据未变更");
        break;
      }
      case "reference-puma":
        toast("已打开 PUMA 历史报送批次选择器", "info");
        break;
      case "upload-preview":
        openUploadModal();
        break;
      case "remove-attachment":
        element.closest(".attachment-item")?.remove();
        toast("附件已移除");
        break;
      case "generate-report":
        confirmModal({
          title: "发起 AI 分析生成",
          description: "系统将使用当前数据范围、附件与 Workbook 候选表生成分析结果。生成过程中页面将锁定，预计耗时 2–5 分钟。",
          checkbox: "已人工复核数据范围与附件口径",
          confirmText: "发起生成",
          action: "confirm-generate-report"
        });
        break;
      case "confirm-generate-report":
        showProgress("report");
        break;
      case "open-cell":
        openCellModal(element.dataset.cell, element.dataset.desc || "业务字段口径");
        break;
      case "submit-cell-comment": {
        const input = document.getElementById("cellComment");
        if (!input?.value.trim()) {
          toast("请输入评论内容", "error");
          break;
        }
        const list = overlayHost.querySelector(".comment-list");
        const item = document.createElement("div");
        item.className = "comment-item";
        item.innerHTML = `<span class="comment-avatar">LY</span><div class="comment-copy"><div class="comment-meta"><strong>林妍</strong><span>刚刚</span></div><p>${escapeHTML(input.value.trim())}</p></div>`;
        list?.appendChild(item);
        applyTranslations(item);
        input.value = "";
        toast("评论已发表");
        break;
      }
      case "show-approval-chain":
      case "done-rules":
        openTaskModal("TASK-20261119-0052", false);
        setTimeout(() => {
          document.querySelector('[data-action="task-modal-tab"][data-tab="chain"]')?.click();
        }, 0);
        break;
      case "open-task":
        openTaskModal(element.dataset.task || "TASK-20261119-0052", element.dataset.todo === "true");
        break;
      case "open-validation-config":
        navigate("validation-config");
        break;
      case "open-validation-detail":
        navigate("validation-detail");
        break;
      case "generate-validation":
        confirmModal({
          title: "发起 Validation 规则生成",
          description: "系统将解析监管发文、线下计算逻辑与 Workbook 候选表，生成可人工调整的校验规则。",
          checkbox: "已人工复核报表范围与规则依据",
          confirmText: "发起生成",
          action: "confirm-generate-validation"
        });
        break;
      case "confirm-generate-validation":
        showProgress("validation");
        break;
      case "edit-rule":
        element.closest("tr")?.querySelector(".rule-edit")?.focus();
        toast("当前行已进入编辑状态", "info");
        break;
      case "open-rule":
        openRuleDrawer(element.dataset.rule);
        break;
      case "submit-approval":
        openApprovalConfirm();
        break;
      case "confirm-submit-approval":
        closeOverlay();
        state.submitted = true;
        render();
        toast("已提交审批，当前规则快照已锁定");
        break;
      case "switch-upload-tab":
        state.uploadTab = element.dataset.tab;
        state.demoState = "normal";
        render();
        break;
      case "upload-file":
        openUploadModal();
        break;
      case "pick-file":
        toast("文件选择器已打开（原型演示）", "info");
        break;
      case "confirm-upload":
        closeOverlay();
        toast("文件已上传，正在校验字段结构");
        break;
      case "preview-file":
        toast("正在预览文件前 100 行", "info");
        break;
      case "download-file":
        toast("下载任务已创建");
        break;
      case "reference-file":
        toast("已引用该文件至当前分析配置");
        break;
      case "new-schedule":
        openScheduleModal();
        break;
      case "confirm-schedule":
        closeOverlay();
        state.uploadTab = "schedule";
        render();
        toast("定时任务已创建");
        break;
      case "toggle-task":
      case "toggle-workflow":
      case "toggle-switch":
        element.classList.toggle("on");
        if (action === "toggle-workflow") {
          const workflow = state.workflows.find((item) => item.id === state.selectedWorkflow);
          workflow.enabled = element.classList.contains("on");
          toast(workflow.enabled ? "流程已启用，保存后生效" : "流程已禁用，新任务将不可引用");
        }
        break;
      case "run-task":
        toast("已提交立即执行请求");
        break;
      case "task-history":
        toast("正在打开执行记录", "info");
        break;
      case "edit-schedule":
        openScheduleModal();
        break;
      case "select-workflow":
        syncWorkflowFields();
        state.selectedWorkflow = element.dataset.workflow;
        render();
        break;
      case "cancel-workflow":
        render();
        toast("未保存修改已撤销", "info");
        break;
      case "add-node": {
        syncWorkflowFields();
        const workflow = state.workflows.find((item) => item.id === state.selectedWorkflow);
        workflow.nodes.push({ name: "新审批节点", approver: "陈思远 · 金融数据部" });
        render();
        toast("已添加审批节点");
        break;
      }
      case "delete-node": {
        syncWorkflowFields();
        const workflow = state.workflows.find((item) => item.id === state.selectedWorkflow);
        if (workflow.nodes.length <= 1) {
          toast("审批流程至少保留 1 个节点", "error");
          break;
        }
        workflow.nodes.splice(Number(element.dataset.nodeIndex), 1);
        render();
        toast("审批节点已删除");
        break;
      }
      case "save-workflow": {
        syncWorkflowFields();
        const workflow = state.workflows.find((item) => item.id === state.selectedWorkflow);
        if (!workflow.name || !workflow.nodes.length) {
          toast("请完善流程名称与审批节点", "error");
          break;
        }
        workflow.version = workflow.version.replace(/v([\d.]+)/, (_, value) => `v${(Number(value) + 0.1).toFixed(1)}`);
        workflow.updated = "2026-11-19 15:42";
        render();
        toast("审批流程已保存并发布新版本");
        break;
      }
      case "new-workflow":
        openNewWorkflowModal();
        break;
      case "confirm-new-workflow": {
        const name = document.getElementById("newWorkflowName")?.value.trim();
        if (!name) {
          toast("请输入流程名称", "error");
          break;
        }
        const marketName = document.getElementById("newWorkflowMarket")?.value || "HK";
        const newId = `wf-${marketName.toLowerCase()}-${Date.now()}`;
        state.workflows.push({
          id: newId,
          market: marketName,
          name,
          modules: ["Reporting", "Validation"],
          enabled: true,
          version: "v1.0",
          updated: "2026-11-19 15:42",
          nodes: [{ name: "业务复核", approver: "陈思远 · 金融数据部" }]
        });
        state.selectedWorkflow = newId;
        closeOverlay();
        render();
        toast("审批流程已创建");
        break;
      }
      case "switch-workbench-tab":
        state.workbenchTab = element.dataset.tab;
        state.demoState = "normal";
        render();
        break;
      case "task-modal-tab":
        overlayHost.querySelectorAll(".task-tab").forEach((tab) => tab.classList.toggle("active", tab === element));
        overlayHost.querySelectorAll(".task-tab-body").forEach((body) => body.classList.toggle("active", body.dataset.taskBody === element.dataset.tab));
        break;
      case "approve-task": {
        const taskId = element.dataset.task;
        confirmModal({
          title: "确认通过任务",
          description: `任务 ${taskId} 将进入下一审批节点，本次审批意见与时间将记录在审批链路中。`,
          checkbox: "已核对任务快照与附件口径",
          confirmText: "确认通过",
          action: "confirm-approve-task",
          extra: `<input type="hidden" id="approveTaskId" value="${taskId}">`
        });
        break;
      }
      case "confirm-approve-task":
        closeOverlay();
        toast("审批已通过，任务已流转至下一节点");
        break;
      case "reject-task":
        openRejectModal(element.dataset.task || "TASK-20261119-0052");
        break;
      case "confirm-reject": {
        const opinion = document.getElementById("rejectOpinion")?.value.trim();
        if (!opinion) {
          document.getElementById("rejectError")?.classList.add("visible");
          document.getElementById("rejectOpinion")?.focus();
          break;
        }
        closeOverlay();
        toast("任务已驳回，意见已同步给提交人");
        break;
      }
      case "retry-return":
        toast("已发起回传重试，正在等待 PUMA 响应", "info");
        break;
      case "toggle-role":
        state.role = state.role === "admin" ? "normal" : "admin";
        document.body.classList.toggle("role-normal", state.role === "normal");
        userMenu.querySelector('[data-action="toggle-role"] span').textContent = state.role === "admin" ? "切换为普通用户预览" : "切换为管理员预览";
        applyTranslations(userMenu);
        userMenu.classList.remove("open");
        if (state.role === "normal" && ["workflows"].includes(currentRoute())) navigate("home");
        else render();
        toast(state.role === "admin" ? "已切换为管理员视图" : "已切换为普通用户视图，仅管理员模块已隐藏", "info");
        break;
      case "profile":
        userMenu.classList.remove("open");
        toast("个人信息与权限面板（原型演示）", "info");
        break;
      case "logout":
        userMenu.classList.remove("open");
        toast("已退出当前演示账号", "info");
        break;
      case "drawer-first-tab":
      case "drawer-comment-tab":
      case "drawer-history-tab":
        overlayHost.querySelectorAll(".drawer-tab").forEach((tab) => tab.classList.toggle("active", tab === element));
        if (action === "drawer-comment-tab") {
          overlayHost.querySelector("#drawerBody").innerHTML = `
            <div class="comment-list">
              <div class="comment-item"><span class="comment-avatar">CY</span><div class="comment-copy"><div class="comment-meta"><strong>陈思远</strong><span>2026-11-19 11:02</span></div><p>建议在表达式前增加空值保护，避免交易对手未映射时误判为通过。</p></div></div>
              <div class="comment-item"><span class="comment-avatar">LY</span><div class="comment-copy"><div class="comment-meta"><strong>林妍</strong><span>2026-11-19 11:08</span></div><p>已完成调整，最终表达式已补充非空判断。</p></div></div>
            </div>`;
          applyTranslations(overlayHost.querySelector("#drawerBody"));
        } else if (action === "drawer-history-tab") {
          overlayHost.querySelector("#drawerBody").innerHTML = `
            <div class="history-item"><div class="history-meta"><strong>林妍</strong><span>2026-11-19 11:06</span></div><div class="diff-box"><div class="diff-before"><span>修改前</span>exposure_ratio &lt; 0.25</div><div class="diff-after"><span>修改后</span>exposure_ratio &lt;= 0.25</div></div></div>
            <div class="history-item"><div class="history-meta"><strong>陈思远</strong><span>2026-11-19 10:58</span></div><div class="diff-box"><div class="diff-before"><span>修改前</span>Monthly（系统建议）</div><div class="diff-after"><span>修改后</span>Monthly（人工确认）</div></div></div>`;
          applyTranslations(overlayHost.querySelector("#drawerBody"));
        } else {
          openRuleDrawer(validationRules[0].seq);
        }
        break;
      case "select-puma-row":
        element.querySelector("input")?.click();
        break;
      default:
        break;
    }
  }

  const languageButtons = [...document.querySelectorAll("[data-language]")];

  function updateLanguageControls() {
    document.documentElement.lang = state.lang === "en" ? "en" : "zh-CN";
    document.body.classList.toggle("lang-en", state.lang === "en");
    document.title =
      state.lang === "en"
        ? "AI Reports and Validation Platform"
        : "AI 报表分析与 Validation 校验规则平台";
    languageButtons.forEach((button) => {
      const active = button.dataset.language === state.lang;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
  }

  function setLanguage(language) {
    if (!['zh', 'en'].includes(language) || language === state.lang) return;
    state.lang = language;
    try {
      localStorage.setItem("validation-ui-lang", language);
    } catch {
      // Language switching still works for the current session when storage is unavailable.
    }
    updateLanguageControls();
    closeOverlay(true);
    render();
    applyTranslations(document.body);
  }

  languageButtons.forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.language));
  });

  document.addEventListener("click", (event) => {
    const actionElement = event.target.closest("[data-action]");
    if (actionElement) {
      event.preventDefault();
      handleAction(actionElement.dataset.action, actionElement);
    }

    document.getElementById("excelContextMenu")?.remove();

    if (!event.target.closest("#userMenu") && !event.target.closest("#userMenuButton")) {
      userMenu.classList.remove("open");
      userMenuButton.setAttribute("aria-expanded", "false");
    }
  });

  userMenuButton.addEventListener("click", () => {
    const open = userMenu.classList.toggle("open");
    userMenuButton.setAttribute("aria-expanded", String(open));
  });

  overlayHost.addEventListener("click", (event) => {
    if (event.target === overlayHost) closeOverlay();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      userMenu.classList.remove("open");
      userMenuButton.setAttribute("aria-expanded", "false");
      document.getElementById("excelContextMenu")?.remove();
      closeOverlay();
    }
  });

  const demoStateControl = document.getElementById("demoStateControl");
  demoStateControl.addEventListener("click", (event) => {
    const button = event.target.closest("[data-demo-state]");
    if (!button) return;
    state.demoState = button.dataset.demoState;
    demoStateControl.querySelectorAll("button").forEach((item) => item.classList.toggle("active", item === button));
    render();
  });

  document.getElementById("demoDockToggle").addEventListener("click", () => demoDock.classList.toggle("open"));
  document.getElementById("demoDockClose").addEventListener("click", () => demoDock.classList.remove("open"));
  document.querySelector(".demo-reset").addEventListener("click", () => {
    state.demoState = "normal";
    demoStateControl.querySelectorAll("button").forEach((item) => item.classList.toggle("active", item.dataset.demoState === "normal"));
    render();
  });

  window.addEventListener("hashchange", () => {
    state.demoState = "normal";
    demoStateControl.querySelectorAll("button").forEach((item) => item.classList.toggle("active", item.dataset.demoState === "normal"));
    closeOverlay(true);
    render();
    pageView.scrollTop = 0;
  });

  updateLanguageControls();
  render();
})();
