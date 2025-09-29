
import React, { useState } from 'react';
import { Heart, Search, User, Menu, ChevronDown, RefreshCw, Users } from 'lucide-react';
const CampaignPage = () => {
  const [activeTab, setActiveTab] = useState('Tổ chức');
  const [searchTerm, setSearchTerm] = useState('');

  const campaigns = [
    {
      id: 1,
      title: 'Thiện Kim Fund - Hỗ trợ người khó khăn trong và sau Covid',
      image: '/api/placeholder/400/250',
      raised: '124.397.255',
      percentage: 36,
      supporters: 74,
      daysLeft: 94,
      type: 'organization'
    },
    {
      id: 2,
      title: 'SINH VIÊN DHQGHN và BUS ĐÉN HOÀ LẠC',
      image: '/api/placeholder/400/250',
      raised: '78.166.380',
      percentage: 3,
      supporters: 279,
      daysLeft: 94,
      type: 'organization'
    },
    {
      id: 3,
      title: 'Hỗ trợ học bổng cho học sinh khuyết tật nghèo tại Trường PTCS DL dạy trẻ cần điều Hà Nội',
      image: '/api/placeholder/400/250',
      raised: '15.402.531',
      percentage: 11,
      supporters: 77,
      daysLeft: 94,
      type: 'organization'
    },
    {
      id: 4,
      title: 'HỖI CHUNG TAY ĐỂ THIỆN QUANG NINH',
      image: '/api/placeholder/400/250',
      raised: '8.245.120',
      percentage: 25,
      supporters: 45,
      daysLeft: 67,
      type: 'organization'
    },
    {
      id: 5,
      title: 'Chương trình hỗ trợ học bổng',
      image: '/api/placeholder/400/250',
      raised: '12.890.450',
      percentage: 18,
      supporters: 89,
      daysLeft: 45,
      type: 'organization'
    },
    {
      id: 6,
      title: 'Xây dựng trường học vùng cao',
      image: '/api/placeholder/400/250',
      raised: '45.670.200',
      percentage: 42,
      supporters: 156,
      daysLeft: 78,
      type: 'organization'
    }
  ];

  const formatMoney = (amount) => {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const CampaignCard = ({ campaign }) => (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative">
        <img
          src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250'%3E%3Crect width='400' height='250' fill='%23f3f4f6'/%3E%3Ctext x='200' y='125' text-anchor='middle' fill='%236b7280' font-size='16' font-family='Arial'%3ECampaign Image%3C/text%3E%3C/svg%3E`}
          alt={campaign.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute bottom-4 right-4 bg-white rounded-full p-2 flex items-center space-x-1">
          <span className="text-sm font-semibold text-gray-700">{campaign.percentage}%</span>
          <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
            <Heart className="w-4 h-4 text-orange-500" />
          </div>
        </div>
        <div className="absolute bottom-4 left-4 bg-white rounded-full px-3 py-1">
          <span className="text-sm font-semibold text-gray-700">
            {formatMoney(campaign.raised)} đ
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-3 line-clamp-2 leading-6">
          {campaign.title}
        </h3>

        <div className="flex justify-between items-center text-sm text-gray-600">
          <div className="flex items-center space-x-1">
            <Users className="w-4 h-4" />
            <span>{campaign.supporters} lượt ủng hộ</span>
          </div>
          <span>Còn {campaign.daysLeft} ngày</span>
        </div>
      </div>
    </div>
  );

  return (


    <>
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-orange-500 text-center mb-8">
          Danh sách chiến dịch gây quỹ
        </h1>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab('Tất cả')}
              className={`pb-2 px-1 ${activeTab === 'Tất cả' ? 'text-orange-500 border-b-2 border-orange-500 font-medium' : 'text-gray-600 hover:text-gray-900'}`}
            >
              Tất cả
            </button>
            <button
              onClick={() => setActiveTab('Tổ chức')}
              className={`pb-2 px-1 ${activeTab === 'Tổ chức' ? 'text-orange-500 border-b-2 border-orange-500 font-medium' : 'text-gray-600 hover:text-gray-900'}`}
            >
              Tổ chức
            </button>
            <button
              onClick={() => setActiveTab('Cá nhân')}
              className={`pb-2 px-1 ${activeTab === 'Cá nhân' ? 'text-orange-500 border-b-2 border-orange-500 font-medium' : 'text-gray-600 hover:text-gray-900'}`}
            >
              Cá nhân
            </button>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex gap-4">
            <div className="relative">
              <select className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
                <option>Dạng thức hiến</option>
                <option>Quyên góp tiền</option>
                <option>Quyên góp hiện vật</option>
                <option>Tình nguyện viên</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
            </div>

            <div className="relative">
              <select className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
                <option>Danh mục</option>
                <option>Giáo dục</option>
                <option>Y tế</option>
                <option>Trẻ em</option>
                <option>Người già</option>
                <option>Môi trường</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
            </div>

            <button className="bg-white border border-gray-300 rounded-md p-2 hover:bg-gray-50 transition-colors">
              <RefreshCw className="h-4 w-4 text-gray-600" />
            </button>
          </div>

          <div className="flex-1 max-w-md ml-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Tìm kiếm tên chiến dịch"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Campaign Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {campaigns.map((campaign) => (
            <CampaignCard key={campaign.id} campaign={campaign} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium transition-colors">
            Xem thêm chiến dịch
          </button>
        </div>
      </main>
    </>


  );
}

export default CampaignPage