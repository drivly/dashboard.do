import { useGetList } from 'react-admin'

const useGetStats = () => {
  const { data: Category, total: CategoryTotal } = useGetList('Category')
  const { data: Customer, total: CustomerTotal } = useGetList('Customer')
  const { data: Employee, total: EmployeeTotal } = useGetList('Employee')
  const { data: EmployeeTerritory, total: ETTotal } =
    useGetList('EmployeeTerritory')
  const { data: OrderDetail, total: ODTotal } = useGetList('OrderDetail')
  const { data: Product, total: ProductTotal } = useGetList('Product')
  const { data: Region, total: RegionTotal } = useGetList('Region')
  const { data: SalesOrder, total: SalesOrderTotal } = useGetList('SalesOrder')
  const { data: Shipper, total: ShipperTotal } = useGetList('Shipper')
  const { data: Supplier, total: SupplierTotal } = useGetList('Supplier')
  const { data: Territory, total: TerritoryTotal } = useGetList('Territory')

  let totals = [
    CategoryTotal,
    CustomerTotal,
    EmployeeTotal,
    ETTotal,
    ODTotal,
    ProductTotal,
    RegionTotal,
    SalesOrderTotal,
    ShipperTotal,
    SupplierTotal,
    TerritoryTotal,
  ]

  let totalRecords = totals
    ?.filter((item) => !isNaN(item))
    .reduce((acc, val) => acc + val, 0)
  console.log('totalValue', totalRecords)

  return {
    data: [
      { Category: { data: Category, total: CategoryTotal } },
      { Customer: { data: Customer, total: CustomerTotal } },
      { Employee: { data: Employee, total: EmployeeTotal } },
      { EmployeeTerritory: { data: EmployeeTerritory, total: ETTotal } },
      { OrderDetail: { data: OrderDetail, total: ODTotal } },
      { Product: { data: Product, total: ProductTotal } },
      { Region: { data: Region, total: RegionTotal } },
      { SalesOrder: { data: SalesOrder, total: SalesOrderTotal } },
      { Shipper: { data: Shipper, total: ShipperTotal } },
      { Supplier: { data: Supplier, total: SupplierTotal } },
      { Territory: { data: Territory, total: TerritoryTotal } },
    ],

    totalRecords,
  }
}

export default useGetStats
