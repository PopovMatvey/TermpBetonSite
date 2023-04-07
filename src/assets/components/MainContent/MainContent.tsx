import React from "react";
import { Route, Routes } from "react-router-dom";
import { ApplicationPage } from "../../pages/ApplicationPage/ApplicationPage";
import { ContactPage } from "../../pages/ContactsPage/ContactsPage";
import { GeneralPage } from "../../pages/GeneralPage/GeneralPage";
import { PriceListPage } from "../../pages/PriceListPage/PriceListPage";
import { ProductionPage } from "../../pages/ProductionPage/ProductionPage";
import "./css/MainContent.css";

// Основной контент
export function MainContent() {
    return (
        <div className="main-content">
            <Routes>
                <Route path="/" element={<GeneralPage />}></Route>
                <Route path="/production" element={<ProductionPage />}></Route>
                <Route path="/application" element={<ApplicationPage />}></Route>
                <Route path="/price-list" element={<PriceListPage />}></Route>
                <Route path="/contacts" element={<ContactPage />}></Route>
            </Routes>
        </div>
    );
}