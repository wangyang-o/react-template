// 导入图片文件
// declare module "*.png";
// declare module "*.jpg";
// declare module "*.jpeg";
// declare module "*.gif";
// declare module "*.svg";


// 导入 SCSS 模块
declare module "*.scss" {
  const content: { [className: string]: string };
  export default content;
}

// 导入样式模块（SCSS）
declare module "*.module.scss" {
  const classes: { [className: string]: string };
  export default classes;
}
