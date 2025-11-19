/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import { 
  MagnifyingGlassIcon, 
  ShoppingCartIcon, 
  UserCircleIcon, 
  MapPinIcon, 
  ClipboardDocumentListIcon, 
  MegaphoneIcon,
  TruckIcon,
  BookOpenIcon,
  ChatBubbleBottomCenterTextIcon,
  InformationCircleIcon,
  NewspaperIcon,
  BuildingStorefrontIcon,
  GlobeAsiaAustraliaIcon,
  BeakerIcon,
  Bars3Icon,
  PencilSquareIcon
} from '@heroicons/react/24/outline';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans">
      
      {/* --- HEADER --- */}
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-green-100">
        {/* Top Bar */}
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Logo & Slogan */}
            <div className="flex flex-col items-start shrink-0">
               <div className="flex items-end gap-2">
                  <h1 className="text-3xl font-extrabold text-green-700 tracking-tighter leading-none">CDHT</h1>
                  <span className="text-[10px] text-stone-400 font-mono mb-1">VN</span>
               </div>
               <div className="text-xs text-green-600 font-bold uppercase tracking-wide mt-1">Từ nông trại đến bàn ăn Việt</div>
            </div>

            {/* Search Bar */}
            <div className="flex-1 w-full md:w-auto max-w-3xl mx-0 md:mx-8 relative">
              <div className="flex items-center w-full border-2 border-green-600 rounded-lg overflow-hidden bg-white shadow-sm h-11">
                <div className="hidden sm:flex items-center px-3 h-full border-r border-gray-200 bg-gray-50 text-sm text-gray-600 gap-1 cursor-pointer hover:bg-gray-100 transition shrink-0">
                   <MapPinIcon className="w-4 h-4 text-red-500" />
                   <span className="whitespace-nowrap font-medium">Địa chỉ</span>
                </div>
                <input 
                  type="text" 
                  placeholder="Tìm kiếm sản phẩm, nông trại..." 
                  className="flex-1 px-4 h-full outline-none text-stone-700 placeholder-stone-400 min-w-0"
                />
                <button className="bg-green-600 hover:bg-green-700 text-white px-6 h-full font-bold transition-colors flex items-center gap-2 shrink-0">
                   <MagnifyingGlassIcon className="w-5 h-5" />
                   <span className="hidden sm:inline">Tìm Kiếm</span>
                </button>
              </div>
            </div>

            {/* User Actions */}
            <div className="flex items-center gap-6 text-xs sm:text-sm font-medium text-stone-600 shrink-0">
               <button className="flex flex-col items-center gap-1 hover:text-green-600 transition group">
                  <ClipboardDocumentListIcon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  <span className="hidden sm:inline">Đơn hàng</span>
               </button>
               <button className="flex flex-col items-center gap-1 hover:text-green-600 transition group relative">
                  <div className="relative">
                    <ShoppingCartIcon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full border-2 border-white">2</span>
                  </div>
                  <span className="hidden sm:inline">Giỏ hàng</span>
               </button>
               <button className="flex flex-col items-center gap-1 hover:text-green-600 transition group">
                  <PencilSquareIcon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  <span className="hidden sm:inline">Đăng tin</span>
               </button>
            </div>
          </div>
        </div>
      </header>

      {/* --- CATEGORY NAVIGATION --- */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
         <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
               <NavCard title="Sản phẩm chuẩn Việt" subtitle="Chứng nhận OCOP" icon={BuildingStorefrontIcon} color="text-green-600" bg="bg-green-50" />
               <NavCard title="Trái cây xuất khẩu" subtitle="Tiêu chuẩn GlobalGAP" icon={GlobeAsiaAustraliaIcon} color="text-orange-500" bg="bg-orange-50" />
               <NavCard title="Sản phẩm nhà nông" subtitle="Tươi ngon tại vườn" icon={UserCircleIcon} color="text-yellow-600" bg="bg-yellow-50" />
               <NavCard title="Công nghệ nông nghiệp" subtitle="Giải pháp 4.0" icon={BeakerIcon} color="text-blue-600" bg="bg-blue-50" />
            </div>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
         
         {/* --- BANNER --- */}
         <div className="w-full h-48 md:h-[22rem] bg-gradient-to-br from-green-800 via-emerald-700 to-green-900 rounded-2xl shadow-xl mb-10 flex items-center justify-center relative overflow-hidden group">
            {/* Abstract Agricultural Shapes */}
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-[#ffffff0a] transform skew-y-3"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-400/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>
            
            <div className="text-center text-white z-10 p-6 relative">
               <div className="inline-block border border-white/30 bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">Nông Sản Việt 2024</div>
               <h2 className="text-3xl md:text-6xl font-bold mb-6 drop-shadow-sm font-serif tracking-tight">
                  Hương Vị <span className="text-yellow-300 italic">Quê Hương</span>
               </h2>
               <p className="text-lg md:text-xl opacity-90 font-light max-w-2xl mx-auto leading-relaxed">
                  Nền tảng kết nối trực tiếp người nông dân với người tiêu dùng. <br className="hidden md:block"/> Minh bạch nguồn gốc - Trọn vẹn niềm tin.
               </p>
               <button className="mt-8 bg-yellow-400 text-yellow-900 px-8 py-3 rounded-full font-bold shadow-[0_0_20px_rgba(250,204,21,0.4)] hover:scale-105 hover:bg-yellow-300 transition transform flex items-center gap-2 mx-auto">
                  Khám phá ngay
                  <TruckIcon className="w-5 h-5" />
               </button>
            </div>
         </div>

         <div className="flex flex-col lg:flex-row gap-8">
            
            {/* --- SIDEBAR --- */}
            <aside className="w-full lg:w-72 flex-shrink-0 space-y-6">
               <div className="bg-white rounded-xl shadow-sm border border-stone-100 overflow-hidden sticky top-24">
                  <div className="bg-green-50 px-4 py-3 border-b border-green-100">
                     <h3 className="font-bold text-green-800 flex items-center gap-2">
                        <Bars3Icon className="w-5 h-5" />
                        Danh mục chính
                     </h3>
                  </div>
                  <ul className="divide-y divide-stone-50">
                     <SidebarItem icon={ChatBubbleBottomCenterTextIcon} label="Hỗ trợ" />
                     <SidebarItem icon={BookOpenIcon} label="Hướng dẫn" />
                     <SidebarItem icon={MegaphoneIcon} label="Câu chuyện sản phẩm" active />
                     <SidebarItem icon={MapPinIcon} label="Nông nghiệp trải nghiệm" />
                     <SidebarItem icon={InformationCircleIcon} label="Kiến thức nông nghiệp" />
                     <SidebarItem icon={NewspaperIcon} label="Tin tức" />
                     <SidebarItem icon={UserCircleIcon} label="Về chúng tôi" />
                  </ul>
               </div>

               {/* Banner Ad Placeholder */}
               <div className="hidden lg:block h-64 bg-orange-50 rounded-xl border border-orange-100 flex flex-col items-center justify-center text-orange-800 p-4 text-center relative overflow-hidden">
                  <div className="absolute -right-4 -top-4 w-20 h-20 bg-orange-200 rounded-full opacity-50"></div>
                  <h4 className="font-bold text-xl mb-2 z-10">Đồng Hành Cùng Nhà Nông</h4>
                  <button className="mt-2 bg-white border border-orange-200 text-xs font-bold px-3 py-1 rounded hover:bg-orange-100 z-10">Tìm hiểu thêm</button>
               </div>
            </aside>

            {/* --- MAIN CONTENT --- */}
            <main className="flex-1">
               {/* Section Header */}
               <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 border-b border-stone-200 pb-4">
                  <div>
                     <h2 className="text-2xl md:text-3xl font-bold text-stone-800 uppercase tracking-tight">
                        Trải nghiệm hồn quê
                     </h2>
                     <div className="text-green-600 font-medium text-lg mt-1 flex items-center gap-2">
                        <div className="w-8 h-1 bg-green-600 rounded-full"></div>
                        Kết nối nông nghiệp Việt
                     </div>
                  </div>
                  
                  <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
                     <FilterChip label="Tất cả" active />
                     <FilterChip label="Rau củ" />
                     <FilterChip label="Trái cây" />
                     <FilterChip label="Đặc sản" />
                  </div>
               </div>

               {/* Product Grid */}
               <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8">
                  <ProductCard 
                     name="Vải Thiều Thanh Hà" 
                     price="45.000đ" 
                     unit="kg" 
                     origin="Hải Dương" 
                     imageClass="bg-red-100"
                     badge="Mùa vụ"
                  />
                  <ProductCard 
                     name="Gạo ST25 Ông Cua" 
                     price="34.000đ" 
                     unit="kg" 
                     origin="Sóc Trăng" 
                     imageClass="bg-stone-100"
                     badge="Best Seller"
                  />
                  <ProductCard 
                     name="Cà Phê Robusta" 
                     price="120.000đ" 
                     unit="500g" 
                     origin="Đắk Lắk" 
                     imageClass="bg-amber-900/10"
                  />
                  <ProductCard 
                     name="Mật Ong Rừng U Minh" 
                     price="250.000đ" 
                     unit="lít" 
                     origin="Cà Mau" 
                     imageClass="bg-yellow-100"
                  />
                  <ProductCard 
                     name="Bưởi Da Xanh Ruột Hồng" 
                     price="65.000đ" 
                     unit="kg" 
                     origin="Bến Tre" 
                     imageClass="bg-green-100"
                  />
                  <ProductCard 
                     name="Hạt Điều Rang Muối" 
                     price="280.000đ" 
                     unit="hộp" 
                     origin="Bình Phước" 
                     imageClass="bg-orange-100"
                     badge="-15%"
                  />
                  <ProductCard 
                     name="Su Su Tam Đảo" 
                     price="25.000đ" 
                     unit="kg" 
                     origin="Vĩnh Phúc" 
                     imageClass="bg-green-50"
                  />
                  <ProductCard 
                     name="Chè Tân Cương" 
                     price="450.000đ" 
                     unit="kg" 
                     origin="Thái Nguyên" 
                     imageClass="bg-emerald-100"
                  />
                   <ProductCard 
                     name="Thanh Long Ruột Đỏ" 
                     price="30.000đ" 
                     unit="kg" 
                     origin="Bình Thuận" 
                     imageClass="bg-pink-100"
                  />
                   <ProductCard 
                     name="Tỏi Lý Sơn" 
                     price="150.000đ" 
                     unit="kg" 
                     origin="Quảng Ngãi" 
                     imageClass="bg-gray-100"
                  />
                   <ProductCard 
                     name="Nấm Hương Rừng" 
                     price="350.000đ" 
                     unit="kg" 
                     origin="Sapa" 
                     imageClass="bg-brown-100"
                  />
                   <ProductCard 
                     name="Yến Sào Cao Cấp" 
                     price="3.500.000đ" 
                     unit="100g" 
                     origin="Khánh Hòa" 
                     imageClass="bg-blue-50"
                     badge="Premium"
                  />
               </div>
               
               <div className="mt-12 flex justify-center">
                  <button className="border-2 border-stone-200 text-stone-600 px-8 py-3 rounded-full font-bold hover:border-green-600 hover:text-green-600 transition">
                     Xem thêm sản phẩm kết nối
                  </button>
               </div>
            </main>
         </div>
      </div>

      {/* --- FOOTER --- */}
      <footer className="bg-stone-900 text-stone-400 mt-20">
         <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-b border-stone-800">
            <div className="space-y-4">
               <div className="text-3xl font-bold text-white">CDHT</div>
               <p className="text-sm leading-relaxed">
                  Sàn thương mại điện tử chuyên biệt cho nông sản Việt Nam. Kết nối giá trị thực, nâng tầm nông nghiệp nước nhà.
               </p>
               <div className="flex items-center gap-3 text-white pt-2">
                  <div className="bg-white/10 p-2 rounded">
                     <TruckIcon className="w-5 h-5" />
                  </div>
                  <div>
                     <div className="text-[10px] text-stone-400 uppercase">Đối tác vận chuyển</div>
                     <div className="font-bold text-sm">Giao Hàng Tiết Kiệm</div>
                  </div>
               </div>
            </div>
            
            <div>
               <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Về Chúng Tôi</h4>
               <ul className="space-y-3 text-sm">
                  <li><a href="#" className="hover:text-green-400 transition">Giới thiệu chung</a></li>
                  <li><a href="#" className="hover:text-green-400 transition">Đội ngũ sáng lập</a></li>
                  <li><a href="#" className="hover:text-green-400 transition">Tuyển dụng nhân tài</a></li>
                  <li><a href="#" className="hover:text-green-400 transition">Liên hệ hợp tác</a></li>
               </ul>
            </div>

            <div>
               <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Hỗ Trợ Khách Hàng</h4>
               <ul className="space-y-3 text-sm">
                  <li><a href="#" className="hover:text-green-400 transition">Trung tâm trợ giúp</a></li>
                  <li><a href="#" className="hover:text-green-400 transition">Quy định & Chính sách</a></li>
                  <li><a href="#" className="hover:text-green-400 transition">Chính sách bảo mật</a></li>
                  <li><a href="#" className="hover:text-green-400 transition">Giải quyết khiếu nại</a></li>
               </ul>
            </div>

            <div>
               <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Kết Nối</h4>
               <div className="flex gap-2 mb-6">
                  <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white cursor-pointer">F</div>
                  <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center text-white cursor-pointer">Y</div>
                  <div className="w-8 h-8 bg-sky-500 rounded flex items-center justify-center text-white cursor-pointer">T</div>
               </div>
               <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Đối tác tiêu biểu</h4>
               <div className="flex flex-wrap gap-2">
                   {[1,2,3,4].map(i => (
                       <div key={i} className="w-12 h-8 bg-stone-800 rounded border border-stone-700"></div>
                   ))}
               </div>
            </div>
         </div>
         <div className="bg-black/20 py-6">
             <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-xs gap-4">
                <p>&copy; 2024 CDHT Nông Sản Việt. All rights reserved.</p>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-white">Điều khoản</a>
                    <a href="#" className="hover:text-white">Bảo mật</a>
                    <a href="#" className="hover:text-white">Sitemap</a>
                </div>
             </div>
         </div>
      </footer>

    </div>
  );
};

// --- Subcomponents ---

const NavCard = ({ title, subtitle, icon: Icon, color, bg }: any) => (
   <div className="bg-stone-50 p-5 rounded-xl border border-stone-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer group h-full">
      <div className={`${color} ${bg} mb-4 w-12 h-12 rounded-full flex items-center justify-center shadow-sm group-hover:rotate-12 transition-transform duration-300`}>
         <Icon className="w-7 h-7" />
      </div>
      <h3 className="font-bold text-stone-800 text-base mb-1 group-hover:text-green-700 transition-colors">{title}</h3>
      <p className="text-xs text-stone-500">{subtitle}</p>
   </div>
);

const SidebarItem = ({ icon: Icon, label, active }: any) => (
   <li className={`flex items-center gap-3 px-4 py-3.5 transition cursor-pointer border-l-4 ${active ? 'bg-green-50 text-green-800 border-green-600' : 'text-stone-600 border-transparent hover:bg-gray-50 hover:border-gray-300'}`}>
      <Icon className={`w-5 h-5 ${active ? 'text-green-600' : 'text-stone-400'}`} />
      <span className="text-sm font-medium">{label}</span>
   </li>
);

const FilterChip = ({ label, active }: { label: string, active?: boolean }) => (
   <button className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-bold transition ${active ? 'bg-green-600 text-white shadow-md shadow-green-200' : 'bg-white text-stone-500 border border-stone-200 hover:border-green-400 hover:text-green-600'}`}>
      {label}
   </button>
);

const ProductCard = ({ name, price, unit, origin, imageClass, badge }: any) => (
   <div className="bg-white rounded-2xl border border-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group overflow-hidden flex flex-col">
      {/* Image Area */}
      <div className={`aspect-[4/3] w-full ${imageClass} relative flex items-center justify-center overflow-hidden bg-opacity-60`}>
         {badge && (
            <div className="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-bold px-2.5 py-1 rounded shadow-sm z-10">
               {badge}
            </div>
         )}
         
         {/* Decorative Pattern for Placeholder */}
         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>
         
         <BuildingStorefrontIcon className="w-16 h-16 text-stone-900/10 group-hover:scale-110 transition-transform duration-500" />
         
         {/* Hover Actions */}
         <div className="absolute inset-x-4 bottom-4 flex gap-2 translate-y-12 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
            <button className="flex-1 bg-white/90 backdrop-blur text-stone-800 py-2 rounded-lg text-xs font-bold shadow hover:bg-green-600 hover:text-white transition-colors">
               Xem nhanh
            </button>
            <button className="w-8 h-8 flex items-center justify-center bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition-colors">
               <ShoppingCartIcon className="w-4 h-4" />
            </button>
         </div>
      </div>
      
      {/* Content Area */}
      <div className="p-4 flex flex-col flex-1">
         <div className="text-[10px] text-stone-500 mb-2 flex items-center gap-1 bg-stone-100 self-start px-2 py-0.5 rounded-full">
            <MapPinIcon className="w-3 h-3" />
            {origin}
         </div>
         
         <h3 className="font-bold text-stone-800 text-sm leading-snug mb-3 line-clamp-2 group-hover:text-green-700 transition-colors min-h-[2.5rem]">
            {name}
         </h3>
         
         <div className="mt-auto flex items-baseline justify-between pt-3 border-t border-stone-50">
            <div className="flex items-baseline gap-1">
               <span className="text-red-600 font-bold text-lg">{price}</span>
               <span className="text-stone-400 text-xs">/{unit}</span>
            </div>
         </div>
      </div>
   </div>
);

export default App;