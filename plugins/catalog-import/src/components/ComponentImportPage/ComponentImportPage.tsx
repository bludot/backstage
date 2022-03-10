/*
 * Copyright 2022 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import {
  Breadcrumbs,
  Content,
  Header,
  Link,
  Page,
} from '@backstage/core-components';
import { ScmIntegrationList } from '../ScmIntegrationList';
import { Box, Typography } from '@material-ui/core';

/**
 * The catalog import page for components.
 *
 * @public
 */
export const ComponentImportPage = () => {
  return (
    <Page themeId="tool">
      <Header title="Catalog Import" />
      <Content>
        <Box mb={2}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" to="/catalog-import">
              Import
            </Link>
            <Typography color="textPrimary">Software components</Typography>
          </Breadcrumbs>
        </Box>
        <ScmIntegrationList />
      </Content>
    </Page>
  );
};
