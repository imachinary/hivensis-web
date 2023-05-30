import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

import  BcInterface  from './BcInterface';
import { useTranslation } from 'react-i18next';
import { NameSpaces, NameSpacesParm } from '../enum/i18nNamespaces';

interface BreadcrumbsCreatorProps {
  breadcrumbs: BcInterface[];
}

const BreadcrumbsCreator = ({ breadcrumbs } : BreadcrumbsCreatorProps) => {
  const { t } = useTranslation([ NameSpaces.common ]);

  return (
  <div role="presentation">
    <Breadcrumbs aria-label="breadcrumb">
      {breadcrumbs.map((breadcrumb, index) => {
        return (
          <Link key={index} underline="hover" color="inherit" href={breadcrumb.link}>
            {t(breadcrumb.label, NameSpacesParm.common)}
          </Link>
        )
      })
      }      
    </Breadcrumbs>
  </div>
  )
}

export default BreadcrumbsCreator