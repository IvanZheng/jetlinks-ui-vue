import server from '@/utils/request'
import { DeviceMetadata, ProductItem, DepartmentItem  } from '@/views/device/Product/typings'

/**
 * 根据条件查询产品（不带翻页）
 * @param data 查询条件
 * @returns 
 */
export const queryNoPagingPost = (data: any) => server.post(`/device-product/_query/no-paging?paging=false`, data)

/**
 * 导入第三方物模型
 * @param direction from|to
 * @param type 物模型类型
 * @param data 物模型数据
 * @returns 
 */
export const convertMetadata = (direction: 'from' | 'to', type: string, data: any) => server.post<DeviceMetadata>(`/device/product/metadata/convert-${direction}/${type}`, data)

/**
 * 修改产品
 * @param id 产品ID
 * @param data 产品数据
 * @returns 
 */
export const modify = (id: string, data: any) => server.put(`/device-product/${id}`, data)

/**
 * 
 * @returns 
 */
export const getCodecs = () => server.get<{id: string, name: string}>('/device/product/metadata/codecs')

/**
 * 根据产品ID获取产品详情
 * @param id 产品ID
 * @returns 
 */
export const detail = (id: string) => server.get<ProductItem>(`/device-product/${id}`)

/**
 * 产品分类
 * @param data 查询条件
 */
export const category = (data: any) => server.post('/device/category/_tree', data)

/**
 * 获取网关类型
 */
 export const getProviders = () => server.get('/gateway/device/providers')

 /**
  * 查询所属部门
  * @param params 查询条件
  */
 export const queryOrgThree = (params?: Record<string, any>) => server.post<DepartmentItem>('/organization/_all/tree', params)

 /**
  * 获取接入方式
  * @param data 查询条件
  */
 export const queryGatewayList = (data: any) => server.post('/gateway/device/_query/no-paging', data)

 /**
  * 查询产品列表(分页)
  * @param data 查询条件
  */
 export const queryProductList = (data: any) => server.post('/device-product/_query', data)

 /**
 * 启用产品
 * @param productId 产品ID
 * @param data 
 * @returns 
 */
export const _deploy = (productId: string) => server.post(`/device-product/${productId}/deploy`)

/**
 * 禁用产品
 * @param productId 产品ID
 * @param data 
 * @returns 
 */
export const _undeploy = (productId: string) => server.post(`/device-product/${productId}/undeploy`)

/**
 * 新增产品
 * @param data 
 * @returns 
 */
export const addProduct = (data:any) => server.post('/device-product',data)

/**
 * 修改产品
 * @param id 产品ID
 * @param data 
 * @returns 
 */
export const editProduct = (data: any) => server.patch('/device-product', data)

/**
 * 删除产品
 * @param id 产品ID
 */
export const deleteProduct = (id: string) => server.remove(`/device-product/${id}`)

/**
 * 检测产品Id唯一性
 * @param id 产品ID
 */
 export const queryProductId = (id: string) => server.get(`/device-product/${id}/exists`)
/**
 * 保存产品
 * @param data 产品信息
 * @returns 
 */
export const saveProductMetadata = (data: Record<string, unknown>) => server.patch('/device-product', data)

/**
 * 获取设备数量
 * @param data 查询条件
 * @returns
 */
export const getDeviceNumber = (params:any) => server.get('/device-instance/_count', params)

/**
 * 获取协议详情
 *  @param id 协议ID
 */
export const getProtocolDetail = (id:string) => server.post(`/protocol/${id}/detail`, id)

/**
 * 查询设备列表
 */
export const queryList = (data: any) => server.post(`/gateway/device/detail/_query`, data)

/**
 * 查询协议数据
 */
export const getConfigView = (id: string, transport: string) => server.get(`/protocol/${id}/transport/${transport}`)

/**
 * 获取配置数据
 */
export const getConfigMetadata = (id: string) => server.get(`/device/product/${id}/config-metadata`)
/**
 * 引导页是否需要提示
 */
export const productGuide = () => server.get(`/user/settings/product/guide`)
/**
 * 保存引导页修改值
 */
export const productGuideSave = (data: any) => server.patch('/user/settings/product/guide', data)

/**
 * 存储策略
 */
export const getStoragList = () => server.get('/device/product/storage/policies')

/**
 * 保存设备(设备接入)
 */
export const saveDevice = (data:any) => server.post('/device-product',data)

/**
 * 更新选择设备(设备接入)
 */
export const updateDevice = (data:any) => server.patch('/device-product',data)