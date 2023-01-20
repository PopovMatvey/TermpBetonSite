import React from "react";
import { Route, Routes } from "react-router-dom";
import { ApplicationPage } from "./ApplicationPage";
import { ContactPage } from "./ContactsPage";
import { GeneralPage } from "./GeneralPage";
import { PriceListPage } from "./PriceListPage";
import { ProductionPage } from "./ProductionPage";
import "../css/MainContent.css";

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